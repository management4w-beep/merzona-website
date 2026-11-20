#!/usr/bin/env python3
"""ينظّف صور الكتالوج (لقطات شاشة موبايل): بيقص الأشرطة السودا والحواف، بيشيل الصور
الضعيفة/المكررة، بيختار الأحسن بكل قسم، وبيحفظها WebP + data/gallery.json."""
import json, os, shutil, sys
import numpy as np
from PIL import Image, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW = os.path.join(ROOT, '.cache', 'raw')
OUT = os.path.join(ROOT, 'assets', 'gallery')
MAX_KEEP = int(os.environ.get('MAX_KEEP', 8))
MIN_LONG = int(os.environ.get('MIN_LONG', 700))     # أقل طول للضلع الأطول بعد القص
FULL, THUMB = 1400, 640

def longest_run(flags):
    best, bl, s = (0, len(flags)), 0, -1
    for i, v in enumerate(list(flags) + [False]):
        if v and s < 0: s = i
        if not v and s >= 0:
            if i - s > bl: bl, best = i - s, (s, i)
            s = -1
    return best

def crop_bars(im):
    """نفس منطق صفحة الكتالوج: أطول مقطع صفوف/أعمدة مو أسود."""
    W, H = im.size
    aw = min(320, W); ah = max(1, round(H * aw / W))
    a = np.asarray(im.resize((aw, ah), Image.BILINEAR), dtype=np.int32)
    dark = a.sum(axis=2) < 75
    rows = dark.mean(axis=1) < 0.92
    r0, r1 = longest_run(rows)
    cols = dark[r0:r1].mean(axis=0) < 0.92
    c0, c1 = longest_run(cols)
    box = (round(c0 * W / aw), round(r0 * H / ah), round(c1 * W / aw), round(r1 * H / ah))
    if (box[2] - box[0]) < W * 0.2 or (box[3] - box[1]) < H * 0.2:
        return im
    if box != (0, 0, W, H):  # هامش أمان صغير ليختفي أي بكسل أسود متبقي على الحواف
        m = round(W / aw) + 2
        box = (box[0] + (m if box[0] else 0), box[1] + (m if box[1] else 0), box[2] - (m if box[2] < W else 0), box[3] - (m if box[3] < H else 0))
    return im.crop(box)

def levels(im):
    """تصحيح إضاءة خفيف (مثل الكتالوج): توسيع المدى + غاما للصور الغامقة."""
    a = np.asarray(im, dtype=np.float32)
    g = a @ np.array([0.299, 0.587, 0.114], dtype=np.float32)
    lo, hi = np.percentile(g, 0.3), np.percentile(g, 99.9)
    if hi - lo < 40: lo, hi = 0.0, 255.0
    v = np.clip((a - lo) / (hi - lo), 0, 1)
    mean = float(np.clip((g - lo) / (hi - lo), 0, 1).mean())
    gamma = 1.0
    if mean < 0.47: gamma = max(0.6, np.log(0.5) / np.log(max(mean, 0.05)))
    v = np.power(v, gamma)
    l = (v @ np.array([0.299, 0.587, 0.114], dtype=np.float32))[..., None]
    v = np.clip(l + (v - l) * 1.06, 0, 1)
    return Image.fromarray((v * 255).astype(np.uint8))

def sharpness(im):
    g = np.asarray(ImageOps.grayscale(im.resize((800, max(1, round(im.height * 800 / im.width))))), dtype=np.float32)
    lap = 4 * g[1:-1, 1:-1] - g[:-2, 1:-1] - g[2:, 1:-1] - g[1:-1, :-2] - g[1:-1, 2:]
    return float(lap.var())

def ahash(im):
    s = np.asarray(ImageOps.grayscale(im.resize((16, 16), Image.BILINEAR)), dtype=np.float32)
    return (s > s.mean()).flatten()

def main():
    idx_path = os.path.join(RAW, 'index.json')
    if not os.path.exists(idx_path):
        print('no raw images, skipping curation'); return
    index = json.load(open(idx_path))
    shutil.rmtree(OUT, ignore_errors=True); os.makedirs(OUT)
    manifest = {}
    try: EXC = set(json.load(open(os.path.join(ROOT, 'config', 'photo-exclude.json'))))
    except Exception: EXC = set()
    for key, cat in index.items():
        cands = []
        drop = {'open': 0, 'small': 0, 'ratio': 0, 'blur': 0, 'dup': 0}
        ids = cat.get('ids') or [None] * len(cat['files'])
        for f, pid in zip(cat['files'], ids):
            if pid and pid in EXC: drop['open'] += 1; continue
            try:
                im = ImageOps.exif_transpose(Image.open(os.path.join(RAW, cat['slug'], f))).convert('RGB')
            except Exception:
                drop['open'] += 1; continue
            im = crop_bars(im)
            w, h = im.size
            if max(w, h) < MIN_LONG: drop['small'] += 1; continue
            if not (0.55 <= w / h <= 2.3): drop['ratio'] += 1; continue
            cands.append({'im': im, 'sharp': sharpness(im), 'w': w, 'h': h, 'src': f, 'id': pid})
        if not cands:
            print(f'{cat["name"]}: nothing usable', drop); continue
        sharps = sorted(c['sharp'] for c in cands)
        cut = sharps[int(len(sharps) * 0.25)]            # شيل أضعف 25% وضوحاً
        keep = []
        for c in sorted(cands, key=lambda c: -c['sharp']):
            if c['sharp'] < cut and len(cands) > 4: drop['blur'] += 1; continue
            hsh = ahash(c['im'])
            if any((hsh != k['hash']).sum() < 20 for k in keep): drop['dup'] += 1; continue
            c['hash'] = hsh; keep.append(c)
            if len(keep) >= MAX_KEEP: break
        items = []
        for n, c in enumerate(keep, 1):
            im = levels(c['im'])
            dims = (0, 0)
            for size, suffix in ((FULL, ''), (THUMB, '-t')):
                o = im.copy(); o.thumbnail((size, size), Image.LANCZOS)
                if not suffix: dims = o.size
                o.save(os.path.join(OUT, f'{cat["slug"]}-{n}{suffix}.webp'), 'WEBP', quality=82, method=6)
            items.append({'file': f'{cat["slug"]}-{n}.webp', 'thumb': f'{cat["slug"]}-{n}-t.webp', 'w': dims[0], 'h': dims[1], 'id': c.get('id')})
        manifest[key] = {'name': cat['name'], 'items': items}
        print(f'{cat["name"]}: raw {len(cat["files"])} -> kept {len(items)}; dropped {drop}')
    os.makedirs(os.path.join(ROOT, 'data'), exist_ok=True)
    json.dump(manifest, open(os.path.join(ROOT, 'data', 'gallery.json'), 'w'), ensure_ascii=False, indent=1)

if __name__ == '__main__':
    main()

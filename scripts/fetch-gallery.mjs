// يحمّل صور الكتالوج من السيرفر العام ويحفظها داخل الموقع (أسرع وأفضل للـ SEO).
// تشغيل: node scripts/fetch-gallery.mjs   (بيشتغل تلقائياً داخل GitHub Actions)
// إذا فشل السيرفر ما بيكسر البناء: الموقع بيرجع يحمّل الصور من المتصفح مباشرة.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { API_BASE } from '../src/config.mjs';
import { services } from '../src/content.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'assets', 'gallery');
const MAX_PER_CAT = Number(process.env.MAX_PER_CAT || 12);
const SIZE = Number(process.env.IMG_SIZE || 1200);
const key = (n) => String(n).trim().toLowerCase();
const slug = (n) => key(n).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

async function getJson(p) {
  const r = await fetch(API_BASE + p);
  if (!r.ok) throw new Error(`${p} -> HTTP ${r.status}`);
  return r.json();
}

try {
  const wanted = [...new Set(services.flatMap((s) => s.cats))];
  const list = (await getJson('/public/catalogs')).catalogs || [];
  const byName = Object.fromEntries(list.map((c) => [key(c.name), c]));
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });
  const manifest = {};
  for (const name of wanted) {
    const c = byName[key(name)];
    if (!c) { console.warn('catalog not found:', name); continue; }
    const items = ((await getJson('/public/catalogs/' + encodeURIComponent(c.id))).items || []).slice(0, MAX_PER_CAT);
    const saved = [];
    for (const [i, it] of items.entries()) {
      try {
        const r = await fetch(`${API_BASE}/public/catalog-image/${encodeURIComponent(it.id)}?s=${SIZE}&v=${encodeURIComponent(it.v || '')}`);
        if (!r.ok) throw new Error('HTTP ' + r.status);
        const type = r.headers.get('content-type') || '';
        const ext = type.includes('png') ? 'png' : type.includes('webp') ? 'webp' : 'jpg';
        const file = `${slug(name)}-${i + 1}.${ext}`;
        fs.writeFileSync(path.join(OUT, file), Buffer.from(await r.arrayBuffer()));
        saved.push({ file, id: it.id });
      } catch (e) { console.warn('skip image', name, i + 1, e.message); }
    }
    if (saved.length) manifest[key(name)] = { name: c.name, items: saved };
    console.log(name, saved.length, 'images');
  }
  fs.mkdirSync(path.join(ROOT, 'data'), { recursive: true });
  fs.writeFileSync(path.join(ROOT, 'data', 'gallery.json'), JSON.stringify(manifest, null, 1));
} catch (e) {
  console.warn('gallery fetch failed, site will load images in the browser instead:', e.message);
  fs.rmSync(path.join(ROOT, 'data', 'gallery.json'), { force: true });
  fs.rmSync(OUT, { recursive: true, force: true });
}

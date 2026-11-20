// يحمّل الصور الخام من سيرفر الكتالوج العام إلى .cache/raw (بيشغّله الـ workflow قبل curate.py).
// إذا فشل السيرفر ما بيكسر البناء: الموقع بيطلع بدون معارض صور.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { API_BASE } from '../src/config.mjs';
import { services } from '../src/content.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const RAW = path.join(ROOT, '.cache', 'raw');
const MAX_PER_CAT = Number(process.env.MAX_PER_CAT || 40);
const SIZE = Number(process.env.IMG_SIZE || 1600);
const key = (n) => String(n).trim().toLowerCase();
const slug = (n) => key(n).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

async function getJson(p) {
  const r = await fetch(API_BASE + p);
  if (!r.ok) throw new Error(`${p} -> HTTP ${r.status}`);
  return r.json();
}

try {
  const list = (await getJson('/public/catalogs')).catalogs || [];
  console.log('ALL CATALOGS:', JSON.stringify(list.map((c) => [c.name, c.count])));
  const wanted = [...new Set(services.flatMap((s) => s.cats))];
  const byName = Object.fromEntries(list.map((c) => [key(c.name), c]));
  fs.rmSync(RAW, { recursive: true, force: true });
  fs.mkdirSync(RAW, { recursive: true });
  const index = {};
  for (const name of wanted) {
    const c = byName[key(name)];
    if (!c) { console.warn('catalog not found:', name); continue; }
    const items = ((await getJson('/public/catalogs/' + encodeURIComponent(c.id))).items || []).slice(0, MAX_PER_CAT);
    const files = [], ids = [];
    const dir = path.join(RAW, slug(name));
    fs.mkdirSync(dir, { recursive: true });
    for (const [i, it] of items.entries()) {
      try {
        const r = await fetch(`${API_BASE}/public/catalog-image/${encodeURIComponent(it.id)}?s=${SIZE}&v=${encodeURIComponent(it.v || '')}`);
        if (!r.ok) throw new Error('HTTP ' + r.status);
        const f = `${i + 1}.img`;
        fs.writeFileSync(path.join(dir, f), Buffer.from(await r.arrayBuffer()));
        files.push(f); ids.push(it.id);
      } catch (e) { console.warn('skip image', name, i + 1, e.message); }
    }
    index[key(name)] = { name: c.name, slug: slug(name), files, ids };
    console.log(name, 'raw', files.length);
  }
  fs.writeFileSync(path.join(RAW, 'index.json'), JSON.stringify(index));
} catch (e) {
  console.warn('gallery fetch failed, site will build without photo galleries:', e.message);
  fs.rmSync(RAW, { recursive: true, force: true });
}

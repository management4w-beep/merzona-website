// سكربت بناء موقع ميرزونا — بدون أي مكتبات خارجية. تشغيل: node build.mjs
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { SITE_URL, company, branches } from './src/config.mjs';
import { services, ui as ui0, pages } from './src/content.mjs';
import { checklists, extraUi, aboutPage, guidePage } from './src/content2.mjs';
import { arTitles, seoExtra, branchSeo } from './src/seo.mjs';
const sa = (b, lang) => (b.streetAddress && typeof b.streetAddress === 'object' ? b.streetAddress[lang] : b.streetAddress);
import { extra } from './src/services-extra.mjs';
import { projects, projectsPage, IG_REEL } from './src/projects.mjs';
import { labels as artUi, articlesIndex, articles, glossaryPage } from './src/articles.mjs';
for (const e of extra) { services.push(e.svc); checklists[e.svc.slug] = e.check; seoExtra[e.svc.slug] = e.seo; arTitles[e.svc.slug] = e.arTitle; }
for (const s of services) if (arTitles[s.slug]) s.ar.title = arTitles[s.slug];

const ui = { ar: { ...ui0.ar, ...extraUi.ar, nav: { ...ui0.ar.nav, ...extraUi.ar.nav } }, en: { ...ui0.en, ...extraUi.en, nav: { ...ui0.en.nav, ...extraUi.en.nav } } };

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, 'dist');
const U = new URL(SITE_URL);
const ORIGIN = U.origin;
const BASE = U.pathname.replace(/\/+$/, '');
const BUILD_DATE = new Date().toISOString().slice(0, 10);
const YEAR = new Date().getFullYear();
const LANGS = ['ar', 'en'];

// ---------- مساعدات ----------
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const href = (lang, p) => `${BASE}${lang === 'en' ? '/en' : ''}${p}`;
const abs = (lang, p) => `${ORIGIN}${href(lang, p)}`;
const asset = (p) => `${BASE}/assets/${p}`;
const absAsset = (p) => `${ORIGIN}${asset(p)}`;
const hashOf = (f) => crypto.createHash('md5').update(fs.readFileSync(path.join(ROOT, 'assets', f))).digest('hex').slice(0, 8);
const CSS_V = hashOf('css/site.css');
const JS_V = hashOf('js/site.js');
const waLink = (b, text) => `https://wa.me/${b.wa}?text=${encodeURIComponent(text)}`;
const T = (o, lang) => o[lang];
const readJson = (f) => { try { return JSON.parse(fs.readFileSync(path.join(ROOT, f), 'utf8')); } catch { return null; } };
const gallery = readJson('data/gallery.json') || {}; // يكتبه scripts/fetch-gallery.mjs

const WA_ICON = '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true" width="20" height="20"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';
const PHONE_ICON = '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true" width="20" height="20"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25c1.1.37 2.3.57 3.6.57a1 1 0 011 1V20a1 1 0 01-1 1C10.6 21 3 13.4 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.6a1 1 0 01-.25 1z"/></svg>';

// ---------- بيانات الصفحات ----------
const svcBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
const PAGES = [
  { key: 'home', path: '/', copy: pages.home, wa: null },
  { key: 'servicesIndex', path: '/services/', copy: pages.servicesIndex, wa: null },
  ...services.map((s) => ({ key: 'svc', svc: s, path: `/services/${s.slug}/`, copy: s, wa: null })),
  { key: 'about', path: '/about/', copy: aboutPage, wa: null },
  { key: 'guide', path: '/guide/', copy: guidePage, wa: null },
  { key: 'articlesIndex', path: '/articles/', copy: articlesIndex, wa: null },
  ...articles.map((a) => ({ key: 'article', art: a, path: `/articles/${a.slug}/`, copy: a, wa: null })),
  { key: 'glossary', path: '/glossary/', copy: glossaryPage, wa: null },
  { key: 'projects', path: '/projects/', copy: projectsPage, wa: null },
  { key: 'damascus', path: '/damascus/', copy: pages.damascus, wa: 'sy' },
  { key: 'uae', path: '/uae/', copy: pages.uae, wa: 'ae' },
  { key: 'contact', path: '/contact/', copy: pages.contact, wa: null },
];

// ---------- الرأس والتذييل ----------
function navLinks(lang, activeKey) {
  const t = ui[lang].nav;
  const items = [
    ['servicesIndex', '/services/', t.services],
    ['about', '/about/', t.about],
    ['articlesIndex', '/articles/', artUi[lang].nav],
    ['damascus', '/damascus/', t.damascus],
    ['uae', '/uae/', t.uae],
    ['contact', '/contact/', t.contact],
  ];
  return items.map(([k, p, label]) => `<a href="${href(lang, p)}"${activeKey === k || (k === 'servicesIndex' && activeKey === 'svc') || (k === 'articlesIndex' && (activeKey === 'article' || activeKey === 'glossary')) ? ' aria-current="page"' : ''}>${esc(label)}</a>`).join('');
}

function header(lang, page) {
  const t = ui[lang];
  const other = lang === 'ar' ? 'en' : 'ar';
  const brandName = company.nameEn; // الاسم جانب الشعار يبقى Merzona بكل اللغات
  const links = navLinks(lang, page.key);
  return `<a class="skip" href="#main">${esc(t.skip)}</a>
<header class="hd"><div class="wrap hd-in">
<a class="brand" href="${href(lang, '/')}" aria-label="${esc(company.fullEn)}"><img src="${asset('img/logo-header.webp')}" width="130" height="46" alt="${esc(brandName)}"></a>
<nav class="nav" aria-label="${esc(t.menu)}">${links}</nav>
<div class="hd-end"><a class="lang" href="${href(other, page.path)}" hreflang="${other}" lang="${other}">${esc(t.otherName)}</a>
<details class="m-menu"><summary aria-label="${esc(t.menu)}"><span class="burger" aria-hidden="true"></span></summary><nav class="m-nav" aria-label="${esc(t.menu)}">${links}</nav></details></div>
</div></header>`;
}

function fab(lang, page) {
  const t = ui[lang];
  const what = pageWhat(lang, page);
  const msg = what ? t.waMsg(what) : t.waMsgGeneral;
  if (page.wa) {
    const b = branches[page.wa];
    return `<a class="fab fab-one" href="${waLink(b, msg)}" rel="noopener" aria-label="${esc(page.wa === 'sy' ? t.waSy : t.waAe)}">${WA_ICON}<span>${esc(t.whatsapp)}</span></a>`;
  }
  return `<details class="fab"><summary aria-label="${esc(t.whatsapp)}">${WA_ICON}<span>${esc(t.whatsapp)}</span></summary>
<div class="fab-panel"><a href="${waLink(branches.sy, msg)}" rel="noopener">${esc(t.waSy)}</a><a href="${waLink(branches.ae, msg)}" rel="noopener">${esc(t.waAe)}</a></div></details>`;
}

// ---------- مكوّنات المحتوى ----------
function ctaButtons(lang, msgWhat, cls = '') {
  const t = ui[lang];
  const msg = msgWhat ? t.waMsg(msgWhat) : t.waMsgGeneral;
  return `<div class="cta ${cls}"><a class="btn btn-wa" href="${waLink(branches.sy, msg)}" rel="noopener">${WA_ICON}${esc(t.waSy)}</a><a class="btn btn-wa" href="${waLink(branches.ae, msg)}" rel="noopener">${WA_ICON}${esc(t.waAe)}</a></div>`;
}

const catKey = (name) => String(name).trim().toLowerCase();
const catLabel = (lang, cat) => { const s = services.find((x) => x.cats.some((c) => catKey(c) === catKey(cat))); return s ? s[lang].name : ''; };
const photos = (cat) => gallery[catKey(cat)]?.items || [];
const photoUrl = (f) => asset('gallery/' + f);
// يقصّ الوصف عند آخر كلمة كاملة ليبقى ضمن حدود عرض جوجل
function shortDesc(d) {
  if (!d || d.length <= 160) return d;
  const cut = d.slice(0, 157);
  const sp = cut.lastIndexOf(' ');
  return (sp > 100 ? cut.slice(0, sp) : cut).replace(/[\s,.;:،]+$/, '') + '…';
}
function coverOf(cats) { for (const c of cats) { const p = photos(c)[0]; if (p) return p; } return null; }

function tile(lang, s, span) {
  const cov = coverOf(s.cats);
  const img = cov ? `<img src="${photoUrl(cov.thumb)}" width="${cov.w}" height="${cov.h}" alt="" loading="lazy" decoding="async">` : '';
  return `<a class="tile s${span}${cov ? ' has-img' : ''}" href="${href(lang, `/services/${s.slug}/`)}"><span class="tile-bg">${img}</span><span class="tile-t">${esc(s[lang].name)}</span></a>`;
}
function mosaic(lang) {
  return `<div class="mosaic">${services.map((s, i) => tile(lang, s, i < 2 ? 3 : 2)).join('')}</div>`;
}

function galleryBlock(lang, cats, { per = 8, limit = 12, heading } = {}) {
  const t = ui[lang];
  const figs = [];
  let n = 0;
  for (const c of cats) {
    for (const it of photos(c).slice(0, per)) {
      if (n >= limit) break;
      n++;
      const label = `${catLabel(lang, c) || t.ourWork} - ${lang === 'ar' ? company.nameAr : company.nameEn}`;
      figs.push(`<figure><button type="button" class="g-it" data-full="${photoUrl(it.file)}" aria-label="${esc(label)}"><img src="${photoUrl(it.thumb)}" width="${it.w}" height="${it.h}" alt="${esc(label)}" loading="lazy" decoding="async"></button></figure>`);
    }
  }
  if (!figs.length) return '';
  return `<section class="sec sec-alt" aria-labelledby="gal-h"><div class="wrap"><h2 id="gal-h">${esc(heading || t.ourWork)}</h2><p class="muted">${esc(t.galleryNote)}</p><div class="gal">${figs.join('')}</div></div></section>`;
}

function igLink(lang, key, cls = '') {
  const b = branches[key];
  const label = `${t_(lang).instagram} ${key === 'sy' ? (lang === 'ar' ? 'سوريا' : 'Syria') : (lang === 'ar' ? 'الإمارات' : 'UAE')}`;
  return `<a${cls ? ` class="${cls}"` : ''} href="${b.instagram}" rel="noopener me" target="_blank">${esc(label)}</a>`;
}
const t_ = (lang) => ui[lang];

function branchBlock(lang, key) {
  const t = ui[lang];
  const b = branches[key];
  const name = key === 'sy' ? t.branchSy : t.branchAe;
  const areas = (lang === 'ar' ? b.areasAr : b.areasEn).join(lang === 'ar' ? '، ' : ', ');
  const wa = waLink(b, t.waMsgGeneral);
  const rows = [];
  const dist = b.district ? b.district[lang] : null;
  if (key === 'sy') rows.push([t.addressLabel, lang === 'ar' ? `دمشق، ${dist}${b.streetAddress ? '، ' + sa(b, 'ar') : ''}` : `${dist ? dist + ', ' : ''}Damascus${b.streetAddress ? ', ' + sa(b, 'en') : ''}`]);
  else if (b.streetAddress) rows.push([t.addressLabel, sa(b, lang)]);
  rows.push([t.areasLabel, areas]);
  if (b.hoursText) rows.push([lang === 'ar' ? 'ساعات الدوام' : 'Hours', b.hoursText[lang]]);
  else if (b.hours) rows.push([lang === 'ar' ? 'ساعات الدوام' : 'Hours', b.hours.join(' | ')]);
  const dl = rows.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('');
  const gbp = b.gbpUrl ? `<a href="${esc(b.gbpUrl)}" rel="noopener">${lang === 'ar' ? 'الموقع على خرائط جوجل' : 'Find us on Google Maps'}</a> ` : '';
  return `<article class="branch"><h3><a href="${href(lang, key === 'sy' ? '/damascus/' : '/uae/')}">${esc(name)}</a></h3>
<dl class="facts">${dl}</dl>
<p class="phone"><a dir="ltr" href="tel:${b.tel}">${b.phoneDisplay}</a></p>
<div class="cta"><a class="btn btn-wa" href="${wa}" rel="noopener">${WA_ICON}${esc(t.whatsapp)}</a><a class="btn btn-line" href="tel:${b.tel}">${PHONE_ICON}${esc(key === 'sy' ? t.callSy : t.callAe)}</a></div>
<p class="links">${gbp}${igLink(lang, key)}</p></article>`;
}

function faqBlock(lang, heading, items) {
  return `<section class="sec" aria-labelledby="faq-h"><div class="wrap narrow"><h2 id="faq-h">${esc(heading)}</h2>${items.map(([q, a]) => `<details class="faq"><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div></section>`;
}

function crumbs(lang, trail) {
  const t = ui[lang];
  const all = [[t.breadcrumbHome, '/'], ...trail];
  return `<nav class="crumbs" aria-label="breadcrumb">${all.map(([n, p], i) => i === all.length - 1 ? `<span aria-current="page">${esc(n)}</span>` : `<a href="${href(lang, p)}">${esc(n)}</a>`).join('<i aria-hidden="true">/</i>')}</nav>`;
}
function crumbTrail(lang, page) {
  const t = ui[lang];
  if (page.key === 'svc') return [[t.allServices, '/services/'], [page.copy[lang].name, page.path]];
  if (page.key === 'servicesIndex') return [[t.allServices, page.path]];
  if (page.key === 'home') return [];
  if (page.key === 'articlesIndex') return [[artUi[lang].breadcrumb, page.path]];
  if (page.key === 'article') return [[artUi[lang].breadcrumb, '/articles/'], [page.copy[lang].h1, page.path]];
  if (page.key === 'projects') return [[projectsPage[lang].breadcrumb, page.path]];
  if (page.key === 'glossary') return [[artUi[lang].breadcrumb, '/articles/'], [artUi[lang].breadcrumbGlossary, page.path]];
  const label = { damascus: t.nav.damascus, uae: t.nav.uae, contact: t.nav.contact, about: t.breadcrumbAbout, guide: t.breadcrumbGuide }[page.key];
  return [[label, page.path]];
}

function pageWhat(lang, page) {
  if (page.key === 'svc') return page.copy[lang].name;
  if (page.key === 'damascus') return lang === 'ar' ? 'خدماتكم في دمشق' : 'your services in Damascus';
  if (page.key === 'uae') return lang === 'ar' ? 'خدماتكم في الإمارات' : 'your services in the UAE';
  return null;
}

function heroVisual() {
  const prefer = ['glass handrail', 'curtain wall design', 'cast aluminum handrails', 'pergolas', 'glass majlis'];
  for (const c of prefer) {
    const p = photos(c)[0];
    if (p) return `<div class="hero-v"><i class="pane p1" aria-hidden="true"></i><div class="hero-photo"><img src="${photoUrl(p.file)}" width="${p.w}" height="${p.h}" alt="" fetchpriority="high"></div></div>`;
  }
  return `<div class="panes" aria-hidden="true"><i class="pane p1"></i><i class="pane p2"></i><i class="pane p3"></i></div>`;
}

function footer(lang) {
  const t = ui[lang];
  const sy = branches.sy, ae = branches.ae;
  const nameOf = (s) => s[lang].name;
  return `<footer class="ft"><div class="wrap ft-in">
<div class="ft-brand"><img src="${asset('img/logo-light.webp')}" width="120" height="113" alt="${esc(company.fullEn)}" loading="lazy"><p>${esc(t.footerBlurb)}</p><p class="links">${igLink(lang, 'sy')}<br>${igLink(lang, 'ae')}</p></div>
<div><h2>${esc(t.nav.services)}</h2><ul>${services.map((s) => `<li><a href="${href(lang, `/services/${s.slug}/`)}">${esc(nameOf(s))}</a></li>`).join('')}</ul></div>
<div><h2>${esc(t.nav.contact)}</h2>
<p><a href="${href(lang, '/damascus/')}">${esc(t.branchSy)}</a><br><a dir="ltr" href="tel:${sy.tel}">${sy.phoneDisplay}</a></p>
<p><a href="${href(lang, '/uae/')}">${esc(t.branchAe)}</a><br><a dir="ltr" href="tel:${ae.tel}">${ae.phoneDisplay}</a></p>
<p><a dir="ltr" href="mailto:${company.email}">${esc(company.email)}</a></p>
<p><a href="${href(lang, '/about/')}">${esc(t.nav.about)}</a><br><a href="${href(lang, '/guide/')}">${esc(t.nav.guide)}</a><br><a href="${href(lang, '/articles/')}">${esc(artUi[lang].nav)}</a><br><a href="${href(lang, '/glossary/')}">${esc(artUi[lang].glossaryNav)}</a><br><a href="${href(lang, '/projects/')}">${esc(projectsPage[lang].breadcrumb)}</a></p></div>
</div><div class="wrap ft-bot">© ${YEAR} ${esc(lang === 'ar' ? company.fullAr : company.fullEn)}. ${esc(t.rights)}.</div></footer>`;
}

// ---------- أجسام الصفحات ----------
function ctaBand(lang, h, p, what = null) {
  return `<section class="band"><div class="wrap band-in"><div><h2>${esc(h)}</h2><p>${esc(p)}</p></div>${ctaButtons(lang, what)}</div></section>`;
}
function phero(lang, page, c, extra = '') {
  return `<section class="phero"><div class="wrap">${crumbs(lang, crumbTrail(lang, page))}<h1>${esc(c.h1 || c.name)}</h1><p class="lead">${esc(c.lead)}</p>${extra}</div></section>`;
}

// شرائح خلفية الهيرو: أول صورة حقيقية من عدة أقسام، تتبدّل بالتتابع مع حركة بطيئة (CSS فقط)
function heroSlides() {
  const picks = ['Glass Handrail', 'Sliding', 'Curtain wall Design', 'Showers', 'pergolas', 'Door'].map((c) => photos(c)[0]).filter(Boolean).slice(0, 5);
  if (!picks.length) return '';
  const n = picks.length, per = 6, total = n * per;
  return `<div class="hs" style="--hn:${n};--ht:${total}s">${picks.map((p, i) => `<img src="${photoUrl(p.file)}" width="${p.w}" height="${p.h}" alt="" decoding="async"${i ? ' loading="lazy"' : ''} style="animation-delay:${i * per}s">`).join('')}</div>`;
}

function bodyHome(lang) {
  const t = ui[lang], c = pages.home[lang];
  return `<section class="hero hero-compact"><div class="hero-bg" aria-hidden="true">${heroSlides()}<i class="gl g1"></i><i class="gl g2"></i><i class="gl g3"></i></div><div class="wrap hero-in"><div class="hero-t"><h1>${esc(c.h1)}</h1><p class="lead">${esc(c.lead)}</p>${ctaButtons(lang, null, 'cta-hero')}</div></div></section>
${projectsTeaser(lang)}
<section class="sec sec-alt" aria-labelledby="svc-h"><div class="wrap"><h2 id="svc-h">${esc(c.servicesH)}</h2><p class="muted">${esc(c.servicesLead)}</p>${mosaic(lang)}</div></section>
<section class="sec" aria-labelledby="ab-h"><div class="wrap two"><div><h2 id="ab-h">${esc(t.homeAboutH)}</h2><p>${esc(t.homeAboutP)}</p><p><a class="more" href="${href(lang, '/about/')}">${esc(t.moreAbout)}</a></p></div><div><h2>${esc(t.homeGuideH)}</h2><p>${esc(t.homeGuideP)}</p><p><a class="more" href="${href(lang, '/guide/')}">${esc(t.readGuide)}</a></p></div></div></section>

${articlesTeaser(lang)}
<section class="sec" aria-labelledby="br-h"><div class="wrap"><h2 id="br-h">${esc(c.branchesH)}</h2><div class="branches">${branchBlock(lang, 'sy')}${branchBlock(lang, 'ae')}</div></div></section>
<section class="sec sec-alt" aria-labelledby="st-h"><div class="wrap"><h2 id="st-h">${esc(c.stepsH)}</h2><ol class="steps">${c.steps.map(([h, p]) => `<li><h3>${esc(h)}</h3><p>${esc(p)}</p></li>`).join('')}</ol></div></section>
${ctaBand(lang, c.ctaH, c.ctaP)}`;
}


function articleCard(lang, a) {
  const c = a[lang];
  return `<a class="acard" href="${href(lang, `/articles/${a.slug}/`)}"><h3>${esc(c.h1)}</h3><p>${esc(c.lead)}</p><span class="more">${esc(artUi[lang].readMore)}</span></a>`;
}
const COVERED = new Set(['DfpTyo1AYmx', 'DfNDHIegNM4', 'DeKPGybATmP']);
function projectCard(lang, p) {
  const u = projectsPage[lang];
  return `<a class="pcard${COVERED.has(p.id) ? ' pcov' : ''}" href="${IG_REEL(p.id)}" target="_blank" rel="noopener"><img src="${asset(`img/projects/${p.id}.webp`)}" width="408" height="545" alt="${esc(p[lang])}" loading="lazy">${COVERED.has(p.id) ? `<span class="pcv" aria-hidden="true"><img src="${asset('img/logo-mark.webp')}" width="64" height="64" alt="" loading="lazy"><b>Merzona</b><em>${esc(p[lang])}</em></span>` : ''}<span class="pt">${esc(p[lang])}</span><span class="pw">${esc(u.watch)}</span></a>`;
}
function projectsTeaser(lang) {
  const u = projectsPage[lang];
  return `<section class="sec" aria-labelledby="pj-h"><div class="wrap"><h2 id="pj-h">${esc(u.home)}</h2><p class="muted">${esc(u.homeP)}</p><div class="pgrid">${projects.slice(0, 8).map((p) => projectCard(lang, p)).join('')}</div><p><a class="more" href="${href(lang, '/projects/')}">${esc(u.all)}</a></p></div></section>`;
}
function bodyProjects(lang) {
  const u = projectsPage[lang];
  return `${phero(lang, { key: 'projects', path: '/projects/' }, u)}
<section class="sec"><div class="wrap"><div class="pgrid">${projects.map((p) => projectCard(lang, p)).join('')}</div><p class="links">${esc(u.follow)}: ${igLink(lang, 'sy')} &nbsp; ${igLink(lang, 'ae')}</p></div></section>
${ctaBand(lang, pages.home[lang].ctaH, pages.home[lang].ctaP)}`;
}
function articlesTeaser(lang, n = 3) {
  const u = artUi[lang];
  return `<section class="sec" aria-labelledby="art-h"><div class="wrap"><h2 id="art-h">${esc(u.latestH)}</h2><p class="muted">${esc(u.latestP)}</p><div class="acards">${articles.slice(0, n).map((a) => articleCard(lang, a)).join('')}</div><p><a class="more" href="${href(lang, '/articles/')}">${esc(u.allArticles)}</a> &nbsp; <a class="more" href="${href(lang, '/glossary/')}">${esc(u.glossaryLink)}</a></p></div></section>`;
}
function bodyArticlesIndex(lang) {
  const c = articlesIndex[lang], u = artUi[lang];
  return `${phero(lang, { key: 'articlesIndex', path: '/articles/' }, c)}
<section class="sec"><div class="wrap"><div class="acards">${articles.map((a) => articleCard(lang, a)).join('')}</div></div></section>
<section class="sec sec-alt"><div class="wrap"><h2>${esc(u.glossaryTeaserH)}</h2><p>${esc(u.glossaryTeaserP)}</p><p><a class="more" href="${href(lang, '/glossary/')}">${esc(u.glossaryLink)}</a></p></div></section>
${ctaBand(lang, pages.home[lang].ctaH, pages.home[lang].ctaP)}`;
}
function bodyArticle(lang, page) {
  const a = page.art, c = a[lang], u = artUi[lang];
  const svc = a.services.map((s) => svcBySlug[s]).filter(Boolean);
  const others = articles.filter((x) => x.slug !== a.slug).slice(0, 3);
  return `${phero(lang, page, c)}
<section class="sec"><div class="wrap narrow prose">${c.sections.map(([h, ps]) => `<h2>${esc(h)}</h2>${ps.length > 2 || ps.every((p) => p.length < 90) ? `<ul class="ticks">${ps.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>` : ps.map((p) => `<p>${esc(p)}</p>`).join('')}`).join('')}</div></section>
${faqBlock(lang, u.faqH, c.faq)}
<section class="sec sec-alt"><div class="wrap"><h2>${esc(u.relatedServices)}</h2><p class="chips">${svc.map((s) => `<a href="${href(lang, `/services/${s.slug}/`)}">${esc(s[lang].name)}</a>`).join('')}<a href="${href(lang, '/glossary/')}">${esc(u.glossaryNav)}</a></p><h2>${esc(u.alsoRead)}</h2><div class="acards">${others.map((x) => articleCard(lang, x)).join('')}</div></div></section>
${ctaBand(lang, pages.home[lang].ctaH, pages.home[lang].ctaP, c.h1)}`;
}
function bodyGlossary(lang) {
  const c = glossaryPage[lang];
  return `${phero(lang, { key: 'glossary', path: '/glossary/' }, c)}
${c.sections.map(([h, items], i) => `<section class="sec${i % 2 ? ' sec-alt' : ''}"><div class="wrap"><h2>${esc(h)}</h2><dl class="defs">${items.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl></div></section>`).join('\n')}
${ctaBand(lang, pages.home[lang].ctaH, pages.home[lang].ctaP)}`;
}

function bodyServicesIndex(lang) {
  const c = pages.servicesIndex[lang];
  return `${phero(lang, { key: 'servicesIndex', path: '/services/' }, c)}
<section class="sec"><div class="wrap">${mosaic(lang)}</div></section>
${ctaBand(lang, pages.home[lang].ctaH, pages.home[lang].ctaP)}`;
}

function bodyService(lang, page) {
  const t = ui[lang], s = page.svc, c = s[lang];
  const related = services.filter((x) => x.slug !== s.slug).slice(0, 7);
  const cl = checklists[s.slug][lang];
  const x = seoExtra[s.slug];
  const aka = x ? `<p class="muted aka">${esc(lang === 'ar' ? 'تُعرف أيضاً بـ: ' : 'Also called: ')}${esc(x.aka[lang].join(lang === 'ar' ? '، ' : ', '))}</p>` : '';
  const prose = x ? `<section class="sec"><div class="wrap narrow prose">${x.body[lang].map((p) => `<p>${esc(p)}</p>`).join('')}${aka}</div></section>` : '';
  const faqs = [...(x ? x.faq[lang] : []), ...t.faqSvc(c.name)];
  return `${phero(lang, page, c, ctaButtons(lang, c.name, 'cta-hero'))}
${prose}
<section class="sec"><div class="wrap two"><div><h2>${esc(t.features)}</h2><ul class="ticks">${c.features.map((f) => `<li>${esc(f)}</li>`).join('')}</ul></div><div><h2>${esc(t.uses)}</h2><ul class="plain">${c.uses.map((f) => `<li>${esc(f)}</li>`).join('')}</ul></div></div></section>
${galleryBlock(lang, s.cats, { per: 8, limit: 8, heading: `${t.ourWork}: ${c.name}` })}
<section class="sec"><div class="wrap two"><div><h2>${esc(t.checklistH)}</h2><p>${esc(t.checklistP)}</p></div><div><ul class="ticks">${cl.map((f) => `<li>${esc(f)}</li>`).join('')}</ul></div></div></section>
${faqBlock(lang, t.faq, faqs)}
<section class="sec sec-alt"><div class="wrap"><h2>${esc(t.related)}</h2><p class="chips">${related.map((x) => `<a href="${href(lang, `/services/${x.slug}/`)}">${esc(x[lang].name)}</a>`).join('')}<a class="chip-all" href="${href(lang, '/services/')}">${esc(t.allServices)}</a></p></div></section>
${ctaBand(lang, pages.home[lang].ctaH, pages.home[lang].ctaP, c.name)}`;
}

function bodyBranch(lang, page) {
  const t = ui[lang], c = page.copy[lang], key = page.key === 'damascus' ? 'sy' : 'ae';
  const b = branches[key];
  const msg = t.waMsg(pageWhat(lang, page));
  const svcList = services.map((s) => `<li><a href="${href(lang, `/services/${s.slug}/`)}">${esc(s[lang].name)}</a><p>${esc(s[lang].lead)}</p></li>`).join('');
  const mix = ['door', 'cast aluminum handrails', 'curtain wall design', 'glass handrail', 'showers', 'pergolas', 'sliding', 'glass majlis'];
  const extra = `<div class="cta cta-hero"><a class="btn btn-wa" href="${waLink(b, msg)}" rel="noopener">${WA_ICON}${esc(key === 'sy' ? t.waSy : t.waAe)}</a><a class="btn btn-line-d" href="tel:${b.tel}">${PHONE_ICON}<span dir="ltr">${b.phoneDisplay}</span></a></div>`;
  return `${phero(lang, page, c, extra)}
${branchSeo[page.key] ? `<section class="sec sec-tight"><div class="wrap narrow prose"><h2>${esc(branchSeo[page.key][lang].h)}</h2>${branchSeo[page.key][lang].ps.map((p) => `<p>${esc(p)}</p>`).join('')}</div></section>` : ''}
${c.areaP ? `<section class="sec sec-tight"><div class="wrap narrow"><p class="area">${esc(c.areaP)}</p></div></section>` : ''}
<section class="sec"><div class="wrap"><h2>${esc(c.servicesH)}</h2><p class="muted">${esc(c.servicesLead)}</p><ul class="svc-list">${svcList}</ul></div></section>
${galleryBlock(lang, mix, { per: 1, limit: 8, heading: t.ourWork })}
<section class="sec"><div class="wrap two"><div><h2>${esc(c.contactH)}</h2><p>${esc(c.contactP)}</p></div><div>${branchBlock(lang, key)}</div></div></section>
${faqBlock(lang, c.faqH, c.faq)}`;
}

function bodyContact(lang) {
  const t = ui[lang], c = pages.contact[lang];
  return `${phero(lang, { key: 'contact', path: '/contact/' }, c)}
<section class="sec"><div class="wrap"><div class="branches">${branchBlock(lang, 'sy')}${branchBlock(lang, 'ae')}</div>
<p class="mail"><span>${esc(t.email)}:</span> <a dir="ltr" href="mailto:${company.email}">${esc(company.email)}</a></p></div></section>`;
}

function bodyAbout(lang) {
  const c = aboutPage[lang];
  return `${phero(lang, { key: 'about', path: '/about/' }, c)}
<section class="sec"><div class="wrap narrow prose">${c.sections.map(([h, ps]) => `<h2>${esc(h)}</h2>${ps.map((p) => `<p>${esc(p)}</p>`).join('')}`).join('')}</div></section>
<section class="sec sec-alt"><div class="wrap"><h2>${esc(ui[lang].nav.services)}</h2><p class="chips">${services.map((x) => `<a href="${href(lang, `/services/${x.slug}/`)}">${esc(x[lang].name)}</a>`).join('')}</p></div></section>
${branchesSection(lang)}
${ctaBand(lang, pages.home[lang].ctaH, pages.home[lang].ctaP)}`;
}
function branchesSection(lang) {
  return `<section class="sec"><div class="wrap"><h2>${esc(pages.home[lang].branchesH)}</h2><div class="branches">${branchBlock(lang, 'sy')}${branchBlock(lang, 'ae')}</div></div></section>`;
}

function bodyGuide(lang) {
  const c = guidePage[lang];
  return `${phero(lang, { key: 'guide', path: '/guide/' }, c)}
${c.sections.map(([h, items], i) => `<section class="sec${i % 2 ? ' sec-alt' : ''}"><div class="wrap"><h2>${esc(h)}</h2><dl class="defs">${items.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl></div></section>`).join('\n')}
${ctaBand(lang, pages.home[lang].ctaH, pages.home[lang].ctaP)}`;
}

// ---------- JSON-LD ----------
const orgId = `${ORIGIN}${BASE}/#organization`;
const faqNode = (items) => ({ '@type': 'FAQPage', mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) });
const branchId = (key) => `${abs('ar', key === 'sy' ? '/damascus/' : '/uae/')}#branch`;
function areaList(key, lang) {
  if (key === 'sy') return [{ '@type': 'City', name: lang === 'ar' ? 'دمشق' : 'Damascus' }, { '@type': 'AdministrativeArea', name: lang === 'ar' ? 'ريف دمشق' : 'Rif Dimashq' }, { '@type': 'Country', name: lang === 'ar' ? 'سوريا' : 'Syria' }];
  return [{ '@type': 'Country', name: lang === 'ar' ? 'الإمارات العربية المتحدة' : 'United Arab Emirates' }];
}

function orgNode(lang) {
  const n = { '@type': 'Organization', '@id': orgId, name: company.nameEn, alternateName: [company.nameAr, company.fullEn, company.fullAr], url: abs('ar', '/'), logo: { '@type': 'ImageObject', url: absAsset('img/logo.webp') }, image: absAsset('img/og-image.jpg'), email: company.email };
  if (company.foundingYear) n.foundingDate = String(company.foundingYear);
  if (company.sameAs.length) n.sameAs = company.sameAs;
  n.subOrganization = [{ '@id': branchId('sy') }, { '@id': branchId('ae') }];
  n.hasOfferCatalog = { '@type': 'OfferCatalog', name: lang === 'ar' ? 'خدمات الألمنيوم والزجاج' : 'Aluminum and glass services', itemListElement: services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s[lang].name, url: abs(lang, `/services/${s.slug}/`) } })) };
  return n;
}
function branchNode(key, lang) {
  const b = branches[key], t = ui[lang];
  const addr = { '@type': 'PostalAddress', addressCountry: b.country };
  if (key === 'sy') addr.addressLocality = lang === 'ar' ? 'دمشق' : 'Damascus';
  const street = [b.district ? b.district[lang] : null, b.streetAddress ? sa(b, lang) : null].filter(Boolean).join(lang === 'ar' ? '، ' : ', ');
  if (street) addr.streetAddress = street;
  const n = { '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'], '@id': branchId(key), name: `${lang === 'ar' ? company.fullAr : company.fullEn} - ${key === 'sy' ? (lang === 'ar' ? 'دمشق' : 'Damascus') : (lang === 'ar' ? 'الإمارات' : 'UAE')}`, url: abs(lang, key === 'sy' ? '/damascus/' : '/uae/'), telephone: b.tel, email: company.email, image: absAsset('img/og-image.jpg'), logo: absAsset('img/logo.webp'), address: addr, areaServed: areaList(key, lang), parentOrganization: { '@id': orgId } };
  if (b.geo) n.geo = { '@type': 'GeoCoordinates', latitude: b.geo.lat, longitude: b.geo.lng };
  if (b.hours) n.openingHours = b.hours;
  if (b.gbpUrl) n.hasMap = b.gbpUrl;
  n.sameAs = [b.instagram];
  return n;
}
function breadcrumbNode(lang, page) {
  const t = ui[lang];
  const trail = [[t.breadcrumbHome, '/'], ...crumbTrail(lang, page)];
  return { '@type': 'BreadcrumbList', itemListElement: trail.map(([n, p], i) => ({ '@type': 'ListItem', position: i + 1, name: n, item: abs(lang, p) })) };
}
function jsonLd(lang, page) {
  const g = [];
  if (page.key === 'home') {
    g.push(orgNode(lang));
    g.push({ '@type': 'WebSite', '@id': `${ORIGIN}${BASE}/#website`, url: abs(lang, '/'), name: lang === 'ar' ? company.fullAr : company.fullEn, inLanguage: lang, publisher: { '@id': orgId } });
    g.push(branchNode('sy', lang), branchNode('ae', lang));
  } else {
    g.push(breadcrumbNode(lang, page));
    if (page.key === 'damascus') { g.push(branchNode('sy', lang)); g.push(faqNode(page.copy[lang].faq)); }
    if (page.key === 'uae') { g.push(branchNode('ae', lang)); if (page.copy[lang].faq) g.push(faqNode(page.copy[lang].faq)); }
    if (page.key === 'svc') {
      const c = page.svc[lang];
      g.push(faqNode([...(seoExtra[page.svc.slug] ? seoExtra[page.svc.slug].faq[lang] : []), ...ui[lang].faqSvc(c.name)]));
      g.push({ '@type': 'Service', '@id': `${abs(lang, page.path)}#service`, name: c.name, serviceType: c.name, description: c.desc, url: abs(lang, page.path), inLanguage: lang, provider: { '@id': orgId }, areaServed: [...areaList('sy', lang), ...areaList('ae', lang)] });
    }
    if (page.key === 'article') {
      const c = page.copy[lang];
      g.push({ '@type': 'Article', '@id': `${abs(lang, page.path)}#article`, headline: c.h1, description: c.desc, inLanguage: lang, url: abs(lang, page.path), dateModified: BUILD_DATE, author: { '@id': orgId }, publisher: { '@id': orgId }, mainEntityOfPage: abs(lang, page.path) });
      g.push({ '@type': 'FAQPage', mainEntity: c.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) });
    }
    if (page.key === 'about') g.push({ '@type': 'AboutPage', url: abs(lang, page.path), name: page.copy[lang].title, about: { '@id': orgId } });
    if (page.key === 'contact') g.push({ '@type': 'ContactPage', url: abs(lang, page.path), name: page.copy[lang].title, isPartOf: { '@id': `${ORIGIN}${BASE}/#website` } });
  }
  return `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': g }).replace(/</g, '\\u003c')}</script>`;
}

// ---------- الصفحة الكاملة ----------
function head(lang, page, c) {
  const t = ui[lang], other = lang === 'ar' ? 'en' : 'ar';
  const canon = abs(lang, page.path);
  const og = absAsset('img/og-image.jpg');
  return `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(c.title)}</title>
<meta name="description" content="${esc(shortDesc(c.desc))}">
<link rel="canonical" href="${canon}">
<link rel="alternate" hreflang="ar" href="${abs('ar', page.path)}">
<link rel="alternate" hreflang="en" href="${abs('en', page.path)}">
<link rel="alternate" hreflang="x-default" href="${abs('ar', page.path)}">
<meta name="robots" content="index,follow,max-image-preview:large">
<meta name="theme-color" content="#000000">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(lang === 'ar' ? company.fullAr : company.fullEn)}">
<meta property="og:title" content="${esc(c.title)}">
<meta property="og:description" content="${esc(c.desc)}">
<meta property="og:url" content="${canon}">
<meta property="og:image" content="${og}">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta property="og:locale" content="${lang === 'ar' ? 'ar_AR' : 'en_US'}">
<meta property="og:locale:alternate" content="${other === 'ar' ? 'ar_AR' : 'en_US'}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/png" sizes="32x32" href="${asset('img/favicon-32.png')}">
<link rel="apple-touch-icon" href="${asset('img/apple-touch-icon.png')}">
<link rel="manifest" href="${BASE}/site.webmanifest">
<link rel="preload" href="${asset('fonts/naskh.woff')}" as="font" type="font/woff" crossorigin>
<link rel="preload" href="${asset('fonts/plex-arabic-regular.woff')}" as="font" type="font/woff" crossorigin>
<link rel="preload" href="${asset('fonts/plex-arabic-semibold.woff')}" as="font" type="font/woff" crossorigin>
<link rel="stylesheet" href="${asset('css/site.css')}?v=${CSS_V}">
${jsonLd(lang, page)}`;
}

function render(lang, page) {
  const c = page.copy[lang];
  let body;
  switch (page.key) {
    case 'home': body = bodyHome(lang); break;
    case 'servicesIndex': body = bodyServicesIndex(lang); break;
    case 'svc': body = bodyService(lang, page); break;
    case 'damascus': case 'uae': body = bodyBranch(lang, page); break;
    case 'contact': body = bodyContact(lang); break;
    case 'about': body = bodyAbout(lang); break;
    case 'guide': body = bodyGuide(lang); break;
    case 'articlesIndex': body = bodyArticlesIndex(lang); break;
    case 'article': body = bodyArticle(lang, page); break;
    case 'glossary': body = bodyGlossary(lang); break;
    case 'projects': body = bodyProjects(lang); break;
  }
  const t = ui[lang];
  return `<!doctype html>
<html lang="${t.lang}" dir="${t.dir}">
<head>
${head(lang, page, c)}
</head>
<body>
${header(lang, page)}
<main id="main">
${body}
</main>
${footer(lang)}
${fab(lang, page)}
<script src="${asset('js/site.js')}?v=${JS_V}" defer></script>
</body>
</html>
`;
}

function render404() {
  const lang = 'ar', t = ui.ar, c = pages.notFound.ar;
  const page = { key: '404', path: '/', copy: pages.notFound };
  return `<!doctype html>
<html lang="ar" dir="rtl"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(c.title)}</title>
<meta name="robots" content="noindex">
<link rel="icon" type="image/png" href="${asset('img/favicon-32.png')}">
<link rel="stylesheet" href="${asset('css/site.css')}?v=${CSS_V}"></head>
<body>${header(lang, page)}<main id="main"><section class="phero"><div class="wrap"><h1>${esc(c.h1)}</h1><p class="lead">${esc(c.lead)}</p><div class="cta"><a class="btn btn-wa" href="${href('ar', '/')}">${esc(t.breadcrumbHome)}</a><a class="btn btn-line-d" href="${href('ar', '/services/')}">${esc(t.allServices)}</a></div></div></section></main>${footer(lang)}</body></html>
`;
}


// صفحة مراجعة الصور (مخفية، noindex، خارج الـsitemap): اضغط على الصورة لاستبعادها ثم انسخ القائمة
function renderReview() {
  const sections = Object.entries(gallery).map(([k, c]) => `<h2>${esc(c.name)}</h2><div class="rv">${(c.items || []).map((it) => `<figure data-id="${esc(it.id || '')}"><img src="${photoUrl(it.thumb)}" alt="" loading="lazy"><figcaption>${esc(String(it.id || '').slice(0, 8))}</figcaption></figure>`).join('')}</div>`).join('');
  return `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>مراجعة الصور</title>
<style>body{font-family:system-ui,Tahoma,sans-serif;margin:0;padding:1rem 1rem 6rem;background:#fff;color:#000}h1{font-size:1.3rem}h2{font-size:1.1rem;margin:1.5rem 0 .5rem}.rv{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:.5rem}figure{margin:0;position:relative;cursor:pointer;border:3px solid transparent}figure img{width:100%;display:block;aspect-ratio:4/3;object-fit:cover}figcaption{font-size:.7rem;color:#555;text-align:center}figure.x{border-color:#d00}figure.x img{opacity:.35}figure.x:after{content:"✕";position:absolute;top:.2rem;inset-inline-start:.4rem;color:#d00;font-size:1.6rem;font-weight:700}#bar{position:fixed;inset-inline:0;bottom:0;background:#000;color:#fff;padding:.7rem 1rem;display:flex;gap:.7rem;align-items:center}#bar button{background:#3e9fd7;border:0;padding:.6rem 1rem;font-size:1rem;font-weight:700;border-radius:8px}</style></head>
<body><h1>اضغط على أي صورة تبدو خارج الدول العربية أو غير مناسبة لاستبعادها</h1>${sections}
<div id="bar"><span id="n">0</span> صورة مستبعدة <button id="cp" type="button">نسخ القائمة</button></div>
<script>var s=new Set();document.querySelectorAll('figure').forEach(function(f){f.onclick=function(){var i=f.dataset.id;if(!i)return;f.classList.toggle('x');f.classList.contains('x')?s.add(i):s.delete(i);document.getElementById('n').textContent=s.size}});document.getElementById('cp').onclick=function(){var t=JSON.stringify(Array.from(s));(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){alert('تم النسخ، الصقها في رسالتك')},function(){prompt('انسخ القائمة',t)})}</script></body></html>`;
}

// ---------- الكتابة ----------
function write(rel, data) {
  const f = path.join(DIST, rel);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, data);
}

fs.rmSync(DIST, { recursive: true, force: true });
fs.cpSync(path.join(ROOT, 'assets'), path.join(DIST, 'assets'), { recursive: true });

const sitemapUrls = [];
for (const page of PAGES) {
  for (const lang of LANGS) {
    write(`${lang === 'en' ? 'en' : ''}${page.path}index.html`.replace(/^\//, ''), render(lang, page));
  }
  const alt = (l, p) => `<xhtml:link rel="alternate" hreflang="${l}" href="${abs(l, p)}"/>`;
  for (const lang of LANGS) {
    sitemapUrls.push(`<url><loc>${abs(lang, page.path)}</loc><lastmod>${BUILD_DATE}</lastmod>${alt('ar', page.path)}${alt('en', page.path)}<xhtml:link rel="alternate" hreflang="x-default" href="${abs('ar', page.path)}"/></url>`);
  }
}
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${sitemapUrls.join('\n')}\n</urlset>\n`);
write('review/index.html', renderReview());
// ملف التحقق من ملكية الموقع في Google Search Console (لا تحذفه)
write('googleeaa4937c2234d2e6.html', 'google-site-verification: googleeaa4937c2234d2e6.html');
write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}${BASE}/sitemap.xml\n`);
write('404.html', render404());
write('.nojekyll', '');
write('site.webmanifest', JSON.stringify({ name: company.fullEn, short_name: company.nameEn, lang: 'ar', dir: 'rtl', start_url: `${BASE}/`, display: 'browser', theme_color: '#0a2233', background_color: '#ffffff', icons: [{ src: `${BASE}/assets/img/icon-192.png`, sizes: '192x192', type: 'image/png' }] }));
if (process.env.CUSTOM_DOMAIN) write('CNAME', process.env.CUSTOM_DOMAIN + '\n');

console.log(`built ${PAGES.length * 2} pages + 404 -> dist/  (SITE_URL=${SITE_URL})`);

// سكربت بناء موقع ميرزونا — بدون أي مكتبات خارجية. تشغيل: node build.mjs
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { SITE_URL, API_BASE, company, branches } from './src/config.mjs';
import { services, ui, pages } from './src/content.mjs';

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
  { key: 'damascus', path: '/damascus/', copy: pages.damascus, wa: 'sy' },
  { key: 'uae', path: '/uae/', copy: pages.uae, wa: 'ae' },
  { key: 'contact', path: '/contact/', copy: pages.contact, wa: null },
];

// ---------- الرأس والتذييل ----------
function navLinks(lang, activeKey) {
  const t = ui[lang].nav;
  const items = [
    ['servicesIndex', '/services/', t.services],
    ['damascus', '/damascus/', t.damascus],
    ['uae', '/uae/', t.uae],
    ['contact', '/contact/', t.contact],
  ];
  return items.map(([k, p, label]) => `<a href="${href(lang, p)}"${activeKey === k || (k === 'servicesIndex' && activeKey === 'svc') ? ' aria-current="page"' : ''}>${esc(label)}</a>`).join('');
}

function header(lang, page) {
  const t = ui[lang];
  const other = lang === 'ar' ? 'en' : 'ar';
  const brandName = lang === 'ar' ? company.nameAr : company.nameEn;
  const links = navLinks(lang, page.key);
  return `<a class="skip" href="#main">${esc(t.skip)}</a>
<header class="hd"><div class="wrap hd-in">
<a class="brand" href="${href(lang, '/')}" aria-label="${esc(company.fullEn)}"><img src="${asset('img/logo-mark.webp')}" width="44" height="38" alt=""><span>${esc(brandName)}</span></a>
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

function footer(lang) {
  const t = ui[lang];
  const sy = branches.sy, ae = branches.ae;
  return `<footer class="ft"><div class="wrap ft-in">
<div class="ft-brand"><img src="${asset('img/logo-light.webp')}" width="120" height="78" alt="${esc(company.fullEn)}" loading="lazy"><p>${esc(t.footerBlurb)}</p></div>
<div><h2>${esc(t.nav.services)}</h2><ul>${services.map((s) => `<li><a href="${href(lang, `/services/${s.slug}/`)}">${esc(s[lang].name)}</a></li>`).join('')}</ul></div>
<div><h2>${esc(t.nav.contact)}</h2>
<p><a href="${href(lang, '/damascus/')}">${esc(t.branchSy)}</a><br><a dir="ltr" href="tel:${sy.tel}">${sy.phoneDisplay}</a></p>
<p><a href="${href(lang, '/uae/')}">${esc(t.branchAe)}</a><br><a dir="ltr" href="tel:${ae.tel}">${ae.phoneDisplay}</a></p>
<p><a dir="ltr" href="mailto:${company.email}">${esc(company.email)}</a></p></div>
</div><div class="wrap ft-bot">© ${YEAR} ${esc(lang === 'ar' ? company.fullAr : company.fullEn)}. ${esc(t.rights)}.</div></footer>`;
}

// ---------- مكوّنات المحتوى ----------
function ctaButtons(lang, msgWhat, cls = '') {
  const t = ui[lang];
  const msg = msgWhat ? t.waMsg(msgWhat) : t.waMsgGeneral;
  return `<div class="cta ${cls}"><a class="btn btn-wa" href="${waLink(branches.sy, msg)}" rel="noopener">${WA_ICON}${esc(t.waSy)}</a><a class="btn btn-wa" href="${waLink(branches.ae, msg)}" rel="noopener">${WA_ICON}${esc(t.waAe)}</a></div>`;
}

function catKey(name) { return String(name).trim().toLowerCase(); }
function staticCover(cats) {
  for (const c of cats) { const g = gallery[catKey(c)]; if (g && g.items && g.items[0]) return g.items[0].file; }
  return null;
}

function tile(lang, s, span) {
  const cov = staticCover(s.cats);
  const bg = cov ? `<img src="${asset('gallery/' + cov)}" alt="" loading="lazy" decoding="async">` : '';
  const cat = s.cats[0] ? ` data-cat="${esc(s.cats[0])}"` : '';
  return `<a class="tile s${span}${cov ? ' has-img' : ''}" href="${href(lang, `/services/${s.slug}/`)}"><span class="tile-bg"${cov ? '' : cat}>${bg}</span><span class="tile-t">${esc(s[lang].name)}</span></a>`;
}
function mosaic(lang) {
  return `<div class="mosaic">${services.map((s, i) => tile(lang, s, i < 2 ? 3 : 2)).join('')}</div>`;
}

function galleryBlock(lang, cats, { per = 12, limit = 12, heading } = {}) {
  const t = ui[lang];
  const have = cats.filter((c) => gallery[catKey(c)]?.items?.length);
  let inner;
  if (have.length === cats.length && have.length) {
    let n = 0;
    const figs = [];
    for (const c of have) {
      for (const it of gallery[catKey(c)].items.slice(0, per)) {
        if (n++ >= limit) break;
        const f = asset('gallery/' + it.file);
        figs.push(`<figure><button type="button" class="g-it" data-full="${f}" aria-label="${esc(heading || t.ourWork)}"><img src="${f}" alt="${esc((heading || t.ourWork) + ' - ' + company[lang === 'ar' ? 'nameAr' : 'nameEn'])}" loading="lazy" decoding="async"></button></figure>`);
      }
    }
    inner = `<div class="gal" data-static="1">${figs.join('')}</div>`;
  } else {
    inner = `<div class="gal" data-cats='${esc(JSON.stringify(cats))}' data-per="${per}" data-limit="${limit}" data-empty="${esc(t.galleryEmpty)}" aria-busy="true"></div>`;
  }
  return `<section class="sec sec-alt" aria-labelledby="gal-h"><div class="wrap"><h2 id="gal-h">${esc(heading || t.ourWork)}</h2><p class="muted">${esc(t.galleryNote)}</p>${inner}</div></section>`;
}

function branchBlock(lang, key, { full = true } = {}) {
  const t = ui[lang];
  const b = branches[key];
  const name = key === 'sy' ? t.branchSy : t.branchAe;
  const areas = (lang === 'ar' ? b.areasAr : b.areasEn).join(lang === 'ar' ? '، ' : ', ');
  const wa = waLink(b, t.waMsgGeneral);
  const extra = [];
  if (b.streetAddress) extra.push(`<p>${esc(b.streetAddress)}</p>`);
  if (b.hours) extra.push(`<p dir="ltr">${esc(b.hours.join(' | '))}</p>`);
  if (b.gbpUrl) extra.push(`<p><a href="${esc(b.gbpUrl)}" rel="noopener">${lang === 'ar' ? 'على خرائط جوجل' : 'On Google Maps'}</a></p>`);
  return `<article class="branch"><h3><a href="${href(lang, key === 'sy' ? '/damascus/' : '/uae/')}">${esc(name)}</a></h3>
<p class="muted">${esc(areas)}</p>${extra.join('')}
<p class="phone"><a dir="ltr" href="tel:${b.tel}">${b.phoneDisplay}</a></p>
<div class="cta"><a class="btn btn-wa" href="${wa}" rel="noopener">${WA_ICON}${esc(t.whatsapp)}</a><a class="btn btn-line" href="tel:${b.tel}">${PHONE_ICON}${esc(key === 'sy' ? t.callSy : t.callAe)}</a></div></article>`;
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
  const label = page.key === 'damascus' ? t.nav.damascus : page.key === 'uae' ? t.nav.uae : t.nav.contact;
  return [[label, page.path]];
}

function pageWhat(lang, page) {
  if (page.key === 'svc') return page.copy[lang].name;
  if (page.key === 'damascus') return lang === 'ar' ? 'خدماتكم في دمشق' : 'your services in Damascus';
  if (page.key === 'uae') return lang === 'ar' ? 'خدماتكم في الإمارات' : 'your services in the UAE';
  return null;
}

function panes() {
  return `<div class="panes" aria-hidden="true"><i class="pane p1"></i><i class="pane p2"></i><i class="pane p3"></i></div>`;
}

// ---------- أجسام الصفحات ----------
function bodyHome(lang) {
  const t = ui[lang], c = pages.home[lang];
  return `<section class="hero"><div class="wrap hero-in"><div class="hero-t"><h1>${esc(c.h1)}</h1><p class="lead">${esc(c.lead)}</p>${ctaButtons(lang, null, 'cta-hero')}</div>${panes()}</div></section>
<section class="sec" aria-labelledby="svc-h"><div class="wrap"><h2 id="svc-h">${esc(c.servicesH)}</h2><p class="muted">${esc(c.servicesLead)}</p>${mosaic(lang)}</div></section>
<section class="sec sec-alt" aria-labelledby="br-h"><div class="wrap"><h2 id="br-h">${esc(c.branchesH)}</h2><div class="branches">${branchBlock(lang, 'sy')}${branchBlock(lang, 'ae')}</div></div></section>
<section class="sec" aria-labelledby="st-h"><div class="wrap"><h2 id="st-h">${esc(c.stepsH)}</h2><ol class="steps">${c.steps.map(([h, p]) => `<li><h3>${esc(h)}</h3><p>${esc(p)}</p></li>`).join('')}</ol></div></section>
${ctaBand(lang, c.ctaH, c.ctaP)}`;
}

function ctaBand(lang, h, p, what = null) {
  return `<section class="band"><div class="wrap band-in"><div><h2>${esc(h)}</h2><p>${esc(p)}</p></div>${ctaButtons(lang, what)}</div></section>`;
}

function bodyServicesIndex(lang) {
  const c = pages.servicesIndex[lang], t = ui[lang];
  return `<section class="phero"><div class="wrap">${crumbs(lang, crumbTrail(lang, { key: 'servicesIndex', path: '/services/' }))}<h1>${esc(c.h1)}</h1><p class="lead">${esc(c.lead)}</p></div></section>
<section class="sec"><div class="wrap">${mosaic(lang)}</div></section>
${ctaBand(lang, pages.home[lang].ctaH, pages.home[lang].ctaP)}`;
}

function bodyService(lang, page) {
  const t = ui[lang], s = page.svc, c = s[lang];
  const related = services.filter((x) => x.slug !== s.slug).slice(0, 6);
  return `<section class="phero"><div class="wrap">${crumbs(lang, crumbTrail(lang, page))}<h1>${esc(c.name)}</h1><p class="lead">${esc(c.lead)}</p>${ctaButtons(lang, c.name, 'cta-hero')}</div></section>
<section class="sec"><div class="wrap two"><div><h2>${esc(t.features)}</h2><ul class="ticks">${c.features.map((f) => `<li>${esc(f)}</li>`).join('')}</ul></div><div><h2>${esc(t.uses)}</h2><ul class="plain">${c.uses.map((f) => `<li>${esc(f)}</li>`).join('')}</ul></div></div></section>
${s.cats.length ? galleryBlock(lang, s.cats, { per: 12, limit: 12, heading: `${t.ourWork}: ${c.name}` }) : ''}
${faqBlock(lang, t.faq, t.faqSvc(c.name))}
<section class="sec sec-alt"><div class="wrap"><h2>${esc(t.related)}</h2><p class="chips">${related.map((x) => `<a href="${href(lang, `/services/${x.slug}/`)}">${esc(x[lang].name)}</a>`).join('')}<a class="chip-all" href="${href(lang, '/services/')}">${esc(t.allServices)}</a></p></div></section>
${ctaBand(lang, pages.home[lang].ctaH, pages.home[lang].ctaP, c.name)}`;
}

function bodyBranch(lang, page) {
  const t = ui[lang], c = page.copy[lang], key = page.key === 'damascus' ? 'sy' : 'ae';
  const b = branches[key];
  const msg = t.waMsg(pageWhat(lang, page));
  const svcList = services.map((s) => `<li><a href="${href(lang, `/services/${s.slug}/`)}">${esc(s[lang].name)}</a><p>${esc(s[lang].lead)}</p></li>`).join('');
  const mix = ['door', 'cast aluminum handrails', 'curtain wall design', 'glass handrail', 'showers', 'pergolas'];
  return `<section class="phero"><div class="wrap">${crumbs(lang, crumbTrail(lang, page))}<h1>${esc(c.h1)}</h1><p class="lead">${esc(c.lead)}</p>
<div class="cta cta-hero"><a class="btn btn-wa" href="${waLink(b, msg)}" rel="noopener">${WA_ICON}${esc(key === 'sy' ? t.waSy : t.waAe)}</a><a class="btn btn-line-d" href="tel:${b.tel}">${PHONE_ICON}<span dir="ltr">${b.phoneDisplay}</span></a></div></div></section>
<section class="sec"><div class="wrap"><h2>${esc(c.servicesH)}</h2><p class="muted">${esc(c.servicesLead)}</p><ul class="svc-list">${svcList}</ul></div></section>
${galleryBlock(lang, mix, { per: 2, limit: 12, heading: t.ourWork })}
<section class="sec"><div class="wrap two"><div><h2>${esc(c.contactH)}</h2><p>${esc(c.contactP)}</p></div><div>${branchBlock(lang, key)}</div></div></section>
${faqBlock(lang, c.faqH, c.faq)}`;
}

function bodyContact(lang) {
  const t = ui[lang], c = pages.contact[lang];
  return `<section class="phero"><div class="wrap">${crumbs(lang, crumbTrail(lang, { key: 'contact', path: '/contact/', copy: pages.contact }))}<h1>${esc(c.h1)}</h1><p class="lead">${esc(c.lead)}</p></div></section>
<section class="sec"><div class="wrap"><div class="branches">${branchBlock(lang, 'sy')}${branchBlock(lang, 'ae')}</div>
<p class="mail"><span>${esc(t.email)}:</span> <a dir="ltr" href="mailto:${company.email}">${esc(company.email)}</a></p></div></section>`;
}

// ---------- JSON-LD ----------
const orgId = `${ORIGIN}${BASE}/#organization`;
const branchId = (key) => `${abs('ar', key === 'sy' ? '/damascus/' : '/uae/')}#branch`;
function areaList(key, lang) { return (lang === 'ar' ? branches[key].areasAr : branches[key].areasEn).map((n) => ({ '@type': 'City', name: n })); }

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
  if (b.streetAddress) addr.streetAddress = b.streetAddress;
  const n = { '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'], '@id': branchId(key), name: `${lang === 'ar' ? company.fullAr : company.fullEn} - ${key === 'sy' ? (lang === 'ar' ? 'دمشق' : 'Damascus') : (lang === 'ar' ? 'الإمارات' : 'UAE')}`, url: abs(lang, key === 'sy' ? '/damascus/' : '/uae/'), telephone: b.tel, email: company.email, image: absAsset('img/og-image.jpg'), logo: absAsset('img/logo.webp'), address: addr, areaServed: areaList(key, lang), parentOrganization: { '@id': orgId } };
  if (b.geo) n.geo = { '@type': 'GeoCoordinates', latitude: b.geo.lat, longitude: b.geo.lng };
  if (b.hours) n.openingHours = b.hours;
  if (b.gbpUrl) n.hasMap = b.gbpUrl;
  if (company.sameAs.length) n.sameAs = company.sameAs;
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
    if (page.key === 'damascus') g.push(branchNode('sy', lang));
    if (page.key === 'uae') g.push(branchNode('ae', lang));
    if (page.key === 'svc') {
      const c = page.svc[lang];
      g.push({ '@type': 'Service', '@id': `${abs(lang, page.path)}#service`, name: c.name, serviceType: c.name, description: c.desc, url: abs(lang, page.path), inLanguage: lang, provider: { '@id': orgId }, areaServed: [...areaList('sy', lang), ...areaList('ae', lang)] });
    }
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
<meta name="description" content="${esc(c.desc)}">
<link rel="canonical" href="${canon}">
<link rel="alternate" hreflang="ar" href="${abs('ar', page.path)}">
<link rel="alternate" hreflang="en" href="${abs('en', page.path)}">
<link rel="alternate" hreflang="x-default" href="${abs('ar', page.path)}">
<meta name="robots" content="index,follow,max-image-preview:large">
<meta name="theme-color" content="#0a2233">
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
<link rel="preload" href="${asset('fonts/tajawal-regular.woff')}" as="font" type="font/woff" crossorigin>
<link rel="preload" href="${asset('fonts/tajawal-black.woff')}" as="font" type="font/woff" crossorigin>
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
  }
  const t = ui[lang];
  return `<!doctype html>
<html lang="${t.lang}" dir="${t.dir}">
<head>
${head(lang, page, c)}
</head>
<body data-api="${esc(API_BASE)}">
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
<body data-api="${esc(API_BASE)}">${header(lang, page)}<main id="main"><section class="phero"><div class="wrap"><h1>${esc(c.h1)}</h1><p class="lead">${esc(c.lead)}</p><div class="cta"><a class="btn btn-wa" href="${href('ar', '/')}">${esc(t.breadcrumbHome)}</a><a class="btn btn-line-d" href="${href('ar', '/services/')}">${esc(t.allServices)}</a></div></div></section></main>${footer(lang)}</body></html>
`;
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
write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}${BASE}/sitemap.xml\n`);
write('404.html', render404());
write('.nojekyll', '');
write('site.webmanifest', JSON.stringify({ name: company.fullEn, short_name: company.nameEn, lang: 'ar', dir: 'rtl', start_url: `${BASE}/`, display: 'browser', theme_color: '#0a2233', background_color: '#ffffff', icons: [{ src: `${BASE}/assets/img/icon-192.png`, sizes: '192x192', type: 'image/png' }] }));
if (process.env.CUSTOM_DOMAIN) write('CNAME', process.env.CUSTOM_DOMAIN + '\n');

console.log(`built ${PAGES.length * 2} pages + 404 -> dist/  (SITE_URL=${SITE_URL})`);

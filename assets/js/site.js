/* ميرزونا — تحميل صور الكتالوج + عارض الصور. بدون مكتبات. */
(function () {
  'use strict';
  var API = document.body.getAttribute('data-api') || '';
  var catsP = null;

  function getJson(p) {
    return fetch(API + p).then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); });
  }
  function src(it, s) {
    return API + '/public/catalog-image/' + encodeURIComponent(it.id) + '?s=' + s + '&v=' + encodeURIComponent(it.v || '');
  }
  function cats() {
    if (!catsP) {
      catsP = getJson('/public/catalogs').then(function (d) {
        var m = {};
        (d.catalogs || []).forEach(function (c) { m[String(c.name).trim().toLowerCase()] = c; });
        return m;
      });
    }
    return catsP;
  }

  /* ---- عارض الصور ---- */
  var dlg, lbImg, list = [], idx = 0;
  function build() {
    if (dlg) return;
    dlg = document.createElement('dialog');
    dlg.className = 'lb';
    dlg.innerHTML = '<div class="lb-in"><img alt=""><button type="button" class="lb-x" aria-label="Close">&times;</button><button type="button" class="lb-p" aria-label="Previous">&#8249;</button><button type="button" class="lb-n" aria-label="Next">&#8250;</button></div>';
    document.body.appendChild(dlg);
    lbImg = dlg.querySelector('img');
    dlg.querySelector('.lb-x').onclick = function () { dlg.close(); };
    dlg.querySelector('.lb-p').onclick = function () { show(idx - 1); };
    dlg.querySelector('.lb-n').onclick = function () { show(idx + 1); };
    dlg.addEventListener('click', function (e) { if (e.target === dlg || e.target.className === 'lb-in') dlg.close(); });
    dlg.addEventListener('keydown', function (e) {
      var rtl = document.documentElement.dir === 'rtl';
      if (e.key === 'ArrowLeft') show(idx + (rtl ? 1 : -1));
      if (e.key === 'ArrowRight') show(idx + (rtl ? -1 : 1));
    });
  }
  function show(i) {
    if (!list.length) return;
    idx = (i + list.length) % list.length;
    lbImg.src = list[idx];
  }
  function open(buttons, i) {
    build();
    list = buttons.map(function (b) { return b.getAttribute('data-full'); });
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
    show(i);
  }
  function wire(gal) {
    var btns = Array.prototype.slice.call(gal.querySelectorAll('.g-it'));
    btns.forEach(function (b, i) {
      b.addEventListener('click', function () { open(btns, i); });
      var im = b.querySelector('img');
      if (im.complete) im.classList.add('ok'); else im.addEventListener('load', function () { im.classList.add('ok'); });
    });
  }

  /* ---- معارض ديناميكية من الـ API ---- */
  function fill(gal) {
    var names = JSON.parse(gal.getAttribute('data-cats') || '[]');
    var per = parseInt(gal.getAttribute('data-per'), 10) || 12;
    var limit = parseInt(gal.getAttribute('data-limit'), 10) || 12;
    function fail() {
      gal.removeAttribute('aria-busy');
      gal.innerHTML = '<p class="gal-msg"></p>';
      gal.firstChild.textContent = gal.getAttribute('data-empty') || '';
    }
    cats().then(function (map) {
      var found = names.map(function (n) { return map[String(n).trim().toLowerCase()]; }).filter(Boolean);
      if (!found.length) throw new Error('none');
      return Promise.all(found.map(function (c) { return getJson('/public/catalogs/' + encodeURIComponent(c.id)); }));
    }).then(function (results) {
      var items = [];
      results.forEach(function (c) { (c.items || []).slice(0, per).forEach(function (it) { items.push(it); }); });
      items = items.slice(0, limit);
      if (!items.length) throw new Error('empty');
      gal.innerHTML = '';
      items.forEach(function (it) {
        var f = document.createElement('figure');
        var b = document.createElement('button');
        b.type = 'button'; b.className = 'g-it'; b.setAttribute('data-full', src(it, 1600));
        var im = document.createElement('img');
        im.alt = document.querySelector('h1') ? document.querySelector('h1').textContent : '';
        im.loading = 'lazy'; im.decoding = 'async'; im.src = src(it, 800);
        b.appendChild(im); f.appendChild(b); gal.appendChild(f);
      });
      gal.removeAttribute('aria-busy');
      wire(gal);
    }).catch(fail);
  }

  /* ---- صور بلاطات الخدمات ---- */
  function covers(tiles) {
    cats().then(function (map) {
      tiles.forEach(function (el) {
        var c = map[String(el.getAttribute('data-cat')).trim().toLowerCase()];
        if (!c || !c.cover) return;
        var im = new Image();
        im.alt = ''; im.decoding = 'async';
        im.onload = function () { el.appendChild(im); };
        im.src = src(c.cover, 640);
      });
    }).catch(function () {});
  }

  function init() {
    Array.prototype.forEach.call(document.querySelectorAll('.gal[data-static]'), wire);
    var dyn = document.querySelectorAll('.gal[data-cats]');
    var tiles = Array.prototype.slice.call(document.querySelectorAll('.tile-bg[data-cat]'));
    if (!('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(dyn, fill); covers(tiles); return;
    }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { io.unobserve(e.target); fill(e.target); } });
    }, { rootMargin: '300px' });
    Array.prototype.forEach.call(dyn, function (g) { io.observe(g); });
    if (tiles.length) covers(tiles);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

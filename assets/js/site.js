/* ميرزونا: عارض الصور (lightbox) فقط. بدون مكتبات. */
(function () {
  'use strict';
  var dlg, img, list = [], idx = 0;
  function build() {
    if (dlg) return;
    dlg = document.createElement('dialog');
    dlg.className = 'lb';
    dlg.innerHTML = '<div class="lb-in"><img alt=""><button type="button" class="lb-x" aria-label="Close">&times;</button><button type="button" class="lb-p" aria-label="Previous">&#8249;</button><button type="button" class="lb-n" aria-label="Next">&#8250;</button></div>';
    document.body.appendChild(dlg);
    img = dlg.querySelector('img');
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
    img.src = list[idx];
  }
  function open(buttons, i) {
    build();
    list = buttons.map(function (b) { return b.getAttribute('data-full'); });
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
    show(i);
  }
  Array.prototype.forEach.call(document.querySelectorAll('.gal'), function (gal) {
    var btns = Array.prototype.slice.call(gal.querySelectorAll('.g-it'));
    btns.forEach(function (b, i) { b.addEventListener('click', function () { open(btns, i); }); });
  });
})();

/* نموذج طلب عرض السعر: يبني رسالة واتساب جاهزة، بدون إرسال بيانات لأي خادم. */
(function () {
  var f = document.getElementById('qf');
  if (!f) return;
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    var g = function (n) { return (f.elements[n].value || '').trim(); };
    var lines = [f.getAttribute('data-hello')];
    if (g('n')) lines.push(f.getAttribute('data-n') + ': ' + g('n'));
    lines.push(f.getAttribute('data-w') + ': ' + g('w'));
    if (g('a')) lines.push(f.getAttribute('data-a') + ': ' + g('a'));
    if (g('d')) lines.push(f.getAttribute('data-d') + ': ' + g('d'));
    var num = f.getAttribute('data-' + g('b'));
    window.open('https://wa.me/' + num + '?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
  });
})();

// VG Filter — applies saved filter and renders filter buttons on every page
(function() {
  var level = localStorage.getItem('vgFilter') || 'alle';

  // Apply CSS hiding
  var style = document.createElement('style');
  if (level === 'vg1') {
    style.textContent = '.vg2 { display:none !important; } .vg3 { display:none !important; }';
  } else if (level === 'vg2') {
    style.textContent = '.vg3 { display:none !important; }';
  }
  if (style.textContent) document.head.appendChild(style);

  // Render filter buttons at bottom of page
  document.addEventListener('DOMContentLoaded', function() {
    var page = document.querySelector('.page');
    if (!page) return;

    var wrap = document.createElement('div');
    wrap.style.cssText = 'margin-top:2rem; padding-top:1rem; border-top:1px solid var(--border2);';

    var label = document.createElement('p');
    label.style.cssText = 'font-size:11px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:var(--text3); margin-bottom:0.5rem;';
    label.textContent = 'Anbefalt filter';
    wrap.appendChild(label);

    var row = document.createElement('div');
    row.style.cssText = 'display:flex; gap:0.5rem;';

    ['alle', 'vg1', 'vg2', 'vg3'].forEach(function(l) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = l === 'alle' ? 'Alle' : l.toUpperCase();
      btn.className = 'vg-btn' + (l === level ? ' vg-btn-active' : '');
      btn.setAttribute('data-vg', l);
      btn.onclick = function() {
        localStorage.setItem('vgFilter', l);
        location.reload();
      };
      row.appendChild(btn);
    });

    wrap.appendChild(row);

    var nav = page.querySelector('.chapter-nav');
    if (nav) {
      page.insertBefore(wrap, nav);
    } else {
      page.appendChild(wrap);
    }
  });
})();

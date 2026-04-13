// VG Filter — applies saved filter and renders filter buttons on every page
(function() {
  var level = localStorage.getItem('vgFilter') || 'alle';

  // Inject button styles
  var btnStyle = document.createElement('style');
  btnStyle.textContent = '.vg-btn{font-size:12px;font-family:inherit;background:none;border:1px solid var(--border);border-radius:4px;padding:4px 12px;cursor:pointer;color:var(--text3);transition:color 0.15s,border-color 0.15s,background 0.15s;}.vg-btn:hover{color:var(--text);border-color:var(--text);}.vg-btn-active{background:var(--text);color:var(--bg);border-color:var(--text);}';
  document.head.appendChild(btnStyle);

  // Apply CSS hiding based on filter
  var filterStyle = document.createElement('style');
  if (level === 'vg1') {
    filterStyle.textContent = '.vg2{display:none !important;}.vg3{display:none !important;}';
  } else if (level === 'vg2') {
    filterStyle.textContent = '.vg3{display:none !important;}';
  }
  if (filterStyle.textContent) document.head.appendChild(filterStyle);

  // Render filter buttons
  document.addEventListener('DOMContentLoaded', function() {
    var page = document.querySelector('.page');
    if (!page) return;

    var wrap = document.createElement('div');
    wrap.style.cssText = 'margin-top:2rem;padding-top:1rem;border-top:1px solid var(--border2);';

    var label = document.createElement('p');
    label.style.cssText = 'font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--text3);margin-bottom:0.5rem;';
    label.textContent = 'Anbefalt filter';
    wrap.appendChild(label);

    var row = document.createElement('div');
    row.style.cssText = 'display:flex;gap:0.5rem;';

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

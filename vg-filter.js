// VG Filter — reads localStorage and hides vg2/vg3 content accordingly
(function() {
  var level = localStorage.getItem('vgFilter') || 'alle';
  var style = document.createElement('style');
  if (level === 'vg1') {
    style.textContent = '.vg2 { display:none !important; } .vg3 { display:none !important; }';
  } else if (level === 'vg2') {
    style.textContent = '.vg3 { display:none !important; }';
  }
  if (style.textContent) document.head.appendChild(style);
})();

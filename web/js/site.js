// Remember the visitor's language so index.html can open the right main page next time.
try { localStorage.setItem("siteLang", location.pathname.indexOf("_en.html") > -1 ? "en" : "ua"); } catch (e) {}

// Fade blocks in as they scroll into view (replaces the original Tilda reveal script).
(function () {
  var els = [].slice.call(document.querySelectorAll('.r_hidden'));
  if (!els.length) return;
  function show(e) { e.classList.remove('r_hidden'); e.classList.add('r_showed'); }
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!('IntersectionObserver' in window) || reduce) { els.forEach(show); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { show(en.target); io.unobserve(en.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0 });
  els.forEach(function (e) { io.observe(e); });
})();

(() => {
  const root = document.documentElement;
  root.classList.add('js-ready');

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduce.matches) return;

  let ticking = false;
  const field = document.querySelector('.field');
  if (!field) return;

  window.addEventListener('pointermove', (event) => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      const x = (event.clientX / window.innerWidth - 0.5) * 10;
      const y = (event.clientY / window.innerHeight - 0.5) * 10;
      field.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      ticking = false;
    });
  }, { passive: true });
})();

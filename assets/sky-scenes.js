(() => {
  const sections = document.querySelectorAll('body > .hero, main > section, body > footer');
  const notes = ['gold', 'rose', 'silver'];
  const clouds = ['dawn', 'blush'];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const anchors = [];

  function picture(name, className, loadEarly) {
    const img = document.createElement('img');
    img.alt = '';
    img.className = className;
    img.loading = loadEarly ? 'eager' : 'lazy';
    img.decoding = 'async';
    img.src = 'assets/' + name + '.webp';
    return img;
  }

  function island(layer, side, cloud, note, hero) {
    const anchor = document.createElement('span');
    anchor.className = 'sky-island from-' + side;
    if (cloud) anchor.append(picture('cloud-' + cloud, 'cloud-cutout', hero));
    if (note) anchor.append(picture('note-' + note, 'note-sculpture', hero));
    layer.append(anchor);
    anchors.push(anchor);
  }

  function composition(section, index) {
    if (section.matches('.hero')) return 'opening';
    if (section.matches('.desk')) return 'console';
    if (section.matches('.review, .darkPanel')) return 'margin-right';
    if (section.matches('.suite')) return 'instruments';
    if (section.matches('.final')) return 'closing';
    if (section.matches('footer')) return 'credits';
    if (section.matches('.split')) return 'seam';
    return index % 2 ? 'margin-left' : 'margin-right';
  }

  sections.forEach((section, index) => {
    const layout = composition(section, index);
    const layer = document.createElement('div');
    layer.className = 'sky-layer';
    layer.setAttribute('aria-hidden', 'true');
    section.dataset.sky = layout;
    section.append(layer);
    const side = ['margin-left', 'credits', 'instruments'].includes(layout) ? 'left' : 'right';
    if (layout === 'opening') {
      const staff = section.querySelector('.sky-score');
      if (staff) anchors.push(staff);
      island(layer, 'left', 'dawn', '', true);
      island(layer, 'right', 'blush', '', true);
    } else if (layout === 'closing') {
      // The three notes land on the printed staff as the closing scene comes into view.
      for (const [index, finish] of ['gold', 'rose', 'silver'].entries()) {
        island(layer, index === 1 ? 'left' : 'right', '', finish, false);
      }
    } else if (layout === 'credits') {
      island(layer, 'left', 'blush', 'rose', false);
    } else {
      island(layer, side, clouds[index % 2], notes[index % 3], false);
    }
  });

  // Observe the stationary anchor so the animated image can leave and return from either direction.
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      entry.target.classList.toggle('in-view', entry.isIntersecting);
    }
  }, {rootMargin: '-2% 0px -3% 0px'});
  function applyMotionPreference() {
    observer.disconnect();
    document.documentElement.classList.toggle('sky-motion', !reducedMotion.matches);
    if (!reducedMotion.matches) anchors.forEach(anchor => observer.observe(anchor));
  }
  applyMotionPreference();
  reducedMotion.addEventListener('change', applyMotionPreference);
})();

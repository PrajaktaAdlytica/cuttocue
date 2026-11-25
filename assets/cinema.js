(() => {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  const media = gsap.matchMedia();
  const hero = document.querySelector('body > .hero');
  const chapters = [...document.querySelectorAll('main > section')];
  const header = document.querySelector('.sitehead');
  const progress = document.createElement('span');
  progress.className = 'scene-progress';
  progress.setAttribute('aria-hidden', 'true');
  header.append(progress);

  // Keep the written content visible until its own entrance starts.
  function entrance(targets, trigger, from, stagger = 0) {
    if (!targets.length) return;
    gsap.from(targets, {
      duration: .78, ease: 'power3.out', ...from, stagger, immediateRender: false,
      clearProps: 'transform,opacity,clipPath',
      scrollTrigger: {trigger, start: 'top 93%', once: true}
    });
  }

  media.add('(prefers-reduced-motion: no-preference)', () => {
    gsap.to(progress, {scaleX: 1, ease: 'none', scrollTrigger: {
      start: 0, end: () => ScrollTrigger.maxScroll(window) || 1, scrub: true
    }});

    if (hero) {
      const opening = !location.hash && window.scrollY < 100;
      if (opening) {
        hero.classList.add('opening-shot');
        gsap.timeline({defaults: {ease: 'power3.out'}})
          .from('.hero .plate', {scale: 1.12, duration: 2.15}, 0)
          .from('.hero .eyebrow', {x: -20, opacity: .3, duration: .65}, .1)
          .from('.title-line > *', {yPercent: 110, stagger: .14, duration: .9}, .17)
          .from('.heroText p', {y: 12, opacity: .22, duration: .75}, .49)
          .from('.hero .staff-lines use', {strokeDasharray: '1120 1120', strokeDashoffset: 1120, stagger: .06, duration: 1.35, clearProps: 'strokeDasharray,strokeDashoffset'}, .19);
      }
      // Anchor the camera movement to the user's scroll. The foreground travels faster than the sky.
      const travel = gsap.timeline({defaults: {ease: 'none'}, scrollTrigger: {
        trigger: hero, start: 'top top', end: 'bottom top', scrub: .55
      }});
      travel.to('.hero .plate', {yPercent: 7, duration: 1}, 0)
        .to('.hero .picture-dissolve', {clipPath: 'inset(0% 0% 0% 0%)', opacity: .95, duration: .76}, .24)
        .to('.hero .sky-score', {yPercent: -19, xPercent: 5, duration: 1}, 0)
        .to('.hero .from-left', {xPercent: -30, yPercent: 9, duration: 1}, 0)
        .to('.hero .from-right', {xPercent: 26, yPercent: 13, duration: 1}, 0);
    } else if (chapters[0]) {
      gsap.fromTo(chapters[0], {'--horizon': '45%'}, {'--horizon': '64%', ease: 'none',
        scrollTrigger: {trigger: chapters[0], start: 'top top', end: 'bottom top', scrub: true}});
    }

    chapters.forEach((chapter, index) => {
      const left = index % 2 ? 1 : -1;
      const heading = chapter.querySelector('h1,h2');
      const label = chapter.querySelector('.kicker,.eyebrow');
      if (label) entrance([label], label, {x: left * 18, opacity: .38, duration: .55});
      if (heading) entrance([heading], heading, {y: 20, opacity: .35, clipPath: 'inset(0 0 30% 0)'});
      const evidence = chapter.querySelector(':scope > .visual');
      if (evidence) {
        entrance([evidence], evidence, {x: 24, opacity: .6});
        entrance([...evidence.querySelectorAll('.lineitem, .flag')], evidence,
          {x: 16, opacity: .32, duration: .55}, .1);
        gsap.fromTo(evidence, {'--scan': '-108%'}, {'--scan': '108%', duration: 1.1, ease: 'power2.out',
          scrollTrigger: {trigger: evidence, start: 'top 86%', once: true}});
      }
      if (chapter.matches('.desk')) {
        entrance([...chapter.querySelectorAll('.track')], chapter.querySelector('.rails'),
          {clipPath: 'inset(0% 90% 0% 0%)', duration: 1.04}, .12);
      }
      if (chapter.querySelector('.formbox')) {
        // The form fields stay stationary while the background moves behind them.
        const form = chapter.querySelector('.formbox');
        gsap.fromTo(form, {'--form-rule': '0%'}, {'--form-rule': '100%', duration: 1.1,
          scrollTrigger: {trigger: form, start: 'top 92%', once: true}});
      }
      chapter.querySelectorAll('.range i,.changeVis i,.connector').forEach(bar => {
        entrance([bar], bar, {scaleX: .14, transformOrigin: 'left center', duration: .9});
      });
      // Each row has its own trigger, including rows stacked on a narrow screen.
      for (const element of chapter.querySelectorAll('.card, .three > *, .signalmap > div, .work > .col, .price')) {
        entrance([element], element, {y: 20, opacity: .48, delay: (element.offsetLeft / Math.max(innerWidth, 1)) * .14});
      }
      if (chapter.matches('.final')) {
        gsap.to(chapter, {'--night-shift': '3%', ease: 'none',
          scrollTrigger: {trigger: chapter, start: 'top bottom', end: 'bottom top', scrub: .55}});
      }
    });

    const footer = document.querySelector('.footer');
    entrance([...footer.querySelectorAll(':scope > div:not(.sky-layer)')], footer, {y: 14, opacity: .5}, .055);
    return () => hero?.classList.remove('opening-shot');
  });

  // Smooth wheel input only on desktop. Touch, keyboard, and reduced-motion scrolling remain native.
  media.add('(prefers-reduced-motion: no-preference) and (min-width: 900px) and (pointer: fine)', () => {
    if (!window.Lenis) return;
    const lenis = new Lenis({duration: .78, anchors: true});
    const tick = seconds => lenis.raf(seconds * 1000);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(tick);
    return () => { gsap.ticker.remove(tick); lenis.destroy(); };
  });
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
})();

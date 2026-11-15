/* Bewegung für die ganze Seite: Einblenden beim Scrollen, Laufschrift, Parallaxe,
   Bogen-Übergänge, magnetische Buttons. Alles aus, wenn „Bewegung reduzieren“ aktiv ist. */
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

/* Kopfzeile über dem Hero: durchsichtig, bis man am Hero vorbei ist */
const header = document.querySelector<HTMLElement>('.site-header.over');
const hero = document.querySelector<HTMLElement>('[data-hero]');
const headerState = () => header?.classList.toggle('scrolled', scrollY > (hero ? hero.offsetHeight - 90 : 40));
headerState();
addEventListener('scroll', headerState, { passive: true });

if (!reduce) {
  /* 1. Überschriften in Wörter teilen, damit sie zeilenweise hochfahren */
  document.querySelectorAll<HTMLElement>('main h2:not(.statement):not([data-no-split]), [data-split]').forEach((h) => {
    if (h.children.length || h.closest('.prose')) return;
    const text = h.textContent!.trim();
    h.setAttribute('aria-label', text);
    h.textContent = '';
    text.split(/\s+/).forEach((word, i) => {
      const w = document.createElement('span');
      w.className = 'w';
      w.setAttribute('aria-hidden', 'true');
      const inner = document.createElement('span');
      inner.style.setProperty('--i', String(i));
      inner.textContent = word;
      w.append(inner);
      h.append(w, ' ');
    });
    h.classList.add('sw');
  });

  /* 2. Einblenden, sobald etwas ins Bild kommt */
  const targets = document.querySelectorAll<HTMLElement>(
    '.sw, main .section .lede, main .grid > *, [data-reveal], [data-reveal-group] > *',
  );
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  );
  targets.forEach((el) => {
    if (el.closest('[role=tabpanel]')) return;
    const group = el.parentElement;
    if (group?.matches('.grid, [data-reveal-group]')) el.style.setProperty('--d', String([...group.children].indexOf(el)));
    el.classList.add('rv');
    io.observe(el);
  });

  /* 3. Laufschrift, Parallaxe und Bögen in einer gemeinsamen Schleife */
  const marquees = [...document.querySelectorAll<HTMLElement>('[data-marquee]')].map((el) => {
    const track = el.firstElementChild as HTMLElement;
    return { track, unit: track.firstElementChild as HTMLElement, x: 0, speed: Number(el.dataset.speed ?? 60), dir: Number(el.dataset.dir ?? 1) };
  });
  const parallax = [...document.querySelectorAll<HTMLElement>('[data-parallax]')].map((el) => ({ el, f: Number(el.dataset.parallax) }));
  const curves = [...document.querySelectorAll<HTMLElement>('[data-curve]')];
  let lastY = scrollY, vel = 0, sdir = 1, last = performance.now();
  const frame = (now: number) => {
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    const dy = scrollY - lastY; lastY = scrollY;
    if (dy) sdir = Math.sign(dy);
    vel += (Math.abs(dy) - vel) * 0.12;
    const vh = innerHeight;
    for (const m of marquees) {
      const w = m.unit.offsetWidth; if (!w) continue;
      m.x -= (m.speed * dt + vel * 0.55) * m.dir * sdir;
      m.x = ((m.x % w) - w) % w;
      m.track.style.transform = `translate3d(${m.x}px,0,0)`;
    }
    for (const p of parallax) {
      const r = p.el.parentElement!.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) continue;
      p.el.style.transform = `translate3d(0,${(-r.top * p.f).toFixed(1)}px,0)`;
    }
    for (const c of curves) {
      const top = c.getBoundingClientRect().top;
      if (top > vh * 1.2 || top < -200) continue;
      c.style.setProperty('--p', clamp((top - vh * 0.3) / (vh * 0.7)).toFixed(3));
    }
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);

  /* 4. Magnetische Buttons (nur mit Maus) */
  if (fine) {
    document.querySelectorAll<HTMLElement>('.btn, [data-magnetic]').forEach((el) => {
      const k = Number(el.dataset.magnetic || 0.28);
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${((e.clientX - r.left - r.width / 2) * k).toFixed(1)}px,${((e.clientY - r.top - r.height / 2) * k).toFixed(1)}px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }
}

/* Bewegung für die ganze Seite: Einblenden beim Scrollen, Laufschrift, Parallaxe,
   Linien, die sich ziehen, magnetische Buttons. Alles aus, wenn „Bewegung reduzieren“ aktiv ist. */
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

function hero0() { return document.querySelector('[data-hero]'); }
/* Kopfzeile über dem Hero: durchsichtig, bis man am Hero vorbei ist */
const header = hero0() ? document.querySelector<HTMLElement>('.site-header') : null;
const hero = document.querySelector<HTMLElement>('[data-hero]');
const headerState = () => header?.classList.toggle('scrolled', scrollY > 40);
headerState();
addEventListener('scroll', headerState, { passive: true });

if (!reduce) {
  /* 0. Unterseiten: rote Linie unter dem dunklen Seitenkopf */
  document.querySelectorAll('.pagehead').forEach((h) => { const c = document.createElement('div'); c.className = 'draw'; c.dataset.draw = ''; h.after(c); });

  /* 1. Überschriften in Wörter teilen, damit sie zeilenweise hochfahren */
  document.querySelectorAll<HTMLElement>('main h2:not(.statement):not([data-no-split]), .pagehead h1, [data-split]').forEach((h) => {
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
  const draws = [...document.querySelectorAll<HTMLElement>('[data-draw]')];
  const rotates = [...document.querySelectorAll<HTMLElement>('[data-rotate]')].map((el) => ({ el, f: Number(el.dataset.rotate) }));
  const shifts = [...document.querySelectorAll<HTMLElement>('[data-shift]')].map((el) => ({ el, f: Number(el.dataset.shift) }));
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
    for (const d of draws) {
      const top = d.getBoundingClientRect().top;
      if (top > vh * 1.1 || top < -50) continue;
      d.style.setProperty('--p', clamp((vh - top) / (vh * 0.7)).toFixed(3));
    }
    if (scrollY < vh * 2.5) {
      for (const r of rotates) r.el.style.transform = `rotate(${(scrollY * r.f).toFixed(2)}deg)`;
      for (const sh of shifts) sh.el.style.transform = `translate3d(${(scrollY * sh.f).toFixed(1)}px,0,0)`;
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

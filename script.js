// Smooth scroll per ancore
(function(){
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const id = a.getAttribute('href');
      if(id && id.length>1 && document.querySelector(id)){
        e.preventDefault();
        document.querySelector(id).scrollIntoView({behavior:'smooth'});
      }
    });
  });
})();

// Reveal on scroll (rispetta prefers-reduced-motion)
(function(){
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const els = [...document.querySelectorAll('.reveal')];
  if(prefersReduced){ els.forEach(el=>el.classList.add('reveal-visible')); return; }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){ entry.target.classList.add('reveal-visible'); io.unobserve(entry.target); }
    });
  }, {threshold: 0.12});
  els.forEach(el=>io.observe(el));
})();

// Effetto cursore (glow)
(function(){
  const dot = document.getElementById('cursorDot');
  if(!dot) return;
  let raf;
  window.addEventListener('pointermove', (e)=>{
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(()=>{
      dot.style.left = e.clientX + 'px';
      dot.style.top  = e.clientY + 'px';
    });
  });
})();

// Form: aggiorna hero name + bio (nessun backend)
(function(){
  const form = document.getElementById('updateForm'); if(!form) return;
  const nameEl = document.getElementById('heroName');
  const bioEl  = document.getElementById('heroBio');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const nome = (document.getElementById('nome')?.value || '').trim();
    const cognome = (document.getElementById('cognome')?.value || '').trim();
    const messaggio = (document.getElementById('messaggio')?.value || '').trim();
    if(nome || cognome) nameEl.textContent = `${nome} ${cognome}`.trim();
    if(messaggio) bioEl.textContent = messaggio;
    form.reset();
  });
})();

// Footer year (index e cv)
(function(){
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
  const ycv = document.getElementById('yearCV');
  if(ycv) ycv.textContent = new Date().getFullYear();
})();
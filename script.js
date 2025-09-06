// Smooth scroll per ancore
(function(){
document.querySelectorAll('a[href^="#"]').forEach(a=>{
a.addEventListener('click', (e)=>{
const id = a.getAttribute('href');
if(id.length>1){ e.preventDefault(); document.querySelector(id)?.scrollIntoView({behavior:'smooth'}); }
});
});
})();


// Aggiornamento contenuti da form (nessun backend)
(function(){
const form = document.getElementById('updateForm');
if(!form) return;
const nameEl = document.getElementById('heroName');
const bioEl = document.getElementById('heroBio');
const preview= document.getElementById('preview');
form.addEventListener('submit', (e)=>{
e.preventDefault();
const nome = (document.getElementById('nome')?.value || '').trim();
const cognome = (document.getElementById('cognome')?.value || '').trim();
const messaggio = (document.getElementById('messaggio')?.value || '').trim();
if(nome || cognome){ nameEl.textContent = `${nome} ${cognome}`.trim(); }
if(messaggio){ bioEl.textContent = messaggio; }
const data = { nome, cognome, messaggio, updatedAt: new Date().toISOString() };
if(preview){ preview.textContent = JSON.stringify(data, null, 2); }
form.reset();
});
})();


// Effetto cursore (glow sottile) – intensità media
(function(){
const dot = document.getElementById('cursorDot');
if(!dot) return;
let raf; const move = (e)=>{ cancelAnimationFrame(raf); raf = requestAnimationFrame(()=>{ dot.style.left = e.clientX + 'px'; dot.style.top = e.clientY + 'px'; }); };
window.addEventListener('pointermove', move);
})();


// Anno corrente
(function(){ const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear(); })();
/* ===== HAMBURGER DROPDOWN (mobile) ===== */
const menuBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('menu-dropdown');

function openMenu(){
  mobileMenu?.classList.remove('opacity-0','scale-95','pointer-events-none');
  mobileMenu?.classList.add('opacity-100','scale-100');
  menuBtn?.setAttribute('aria-expanded','true');
  const first = mobileMenu?.querySelector('a'); first && first.focus();
  document.addEventListener('click', clickOutside);
  document.addEventListener('keydown', escClose);
}
function closeMenu(){
  mobileMenu?.classList.add('opacity-0','scale-95','pointer-events-none');
  mobileMenu?.classList.remove('opacity-100','scale-100');
  menuBtn?.setAttribute('aria-expanded','false');
  document.removeEventListener('click', clickOutside);
  document.removeEventListener('keydown', escClose);
}
function toggleMenu(){ (menuBtn?.getAttribute('aria-expanded')==='true') ? closeMenu() : openMenu(); }
function clickOutside(e){ if (mobileMenu && !mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) closeMenu(); }
function escClose(e){ if(e.key === 'Escape') closeMenu(); }

if(menuBtn && mobileMenu){
  closeMenu();
  menuBtn.addEventListener('click', (e)=>{ e.stopPropagation(); toggleMenu(); });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
}

/* ===== Effetto cursore (light radial) ===== */
document.addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
});

/* ===== Reveal on scroll per card/sezioni ===== */
const revealTargets = document.querySelectorAll('.reveal, article.group');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{
    if(en.isIntersecting){
      en.target.classList.add('in');
      io.unobserve(en.target);
    }
  });
},{threshold:0.15});
revealTargets.forEach(el=>io.observe(el));

/* ===== Conferma form contatti (se presente) ===== */
const form = document.getElementById("contact-form");
const confirmation = document.getElementById("confirmation");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.reset();
    confirmation?.classList.remove("hidden");
    setTimeout(() => confirmation?.classList.add("hidden"), 5000);
  });
}

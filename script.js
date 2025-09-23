// Mobile nav toggle with overlay + ESC close
const toggleBtn = document.querySelector('.nav__toggle');
const overlay = document.querySelector('.nav__overlay');
const closeBtn = document.querySelector('.nav__close');

function openMenu(){
  overlay.classList.add('open');
  toggleBtn.setAttribute('aria-expanded','true');
  document.body.style.overflow = 'hidden';
}
function closeMenu(){
  overlay.classList.remove('open');
  toggleBtn.setAttribute('aria-expanded','false');
  document.body.style.overflow = '';
}
if(toggleBtn && overlay){
  toggleBtn.addEventListener('click', openMenu);
}
if(closeBtn){
  closeBtn.addEventListener('click', closeMenu);
}
overlay?.addEventListener('click', (e)=>{
  if(e.target === overlay) closeMenu();
});
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape' && overlay?.classList.contains('open')) closeMenu();
});
overlay?.querySelectorAll('a').forEach(a=>a.addEventListener('click', closeMenu));

// Fake lead form handler
const form = document.getElementById('leadForm');
form?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  // Simulate sending (here we just store in localStorage)
  const leads = JSON.parse(localStorage.getItem('leads')||'[]');
  leads.push({...data, ts: new Date().toISOString()});
  localStorage.setItem('leads', JSON.stringify(leads));
  alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
  form.reset();
});

// Price request buttons
document.querySelectorAll('[data-sku]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const sku = btn.getAttribute('data-sku');
    alert(`Заявка на прайс по ${sku} отправлена. Менеджер свяжется с вами.`);
  });
});

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


// отправка по ватсап
const form = document.getElementById('leadForm');

form?.addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(form);

  const name = formData.get("name");
  const company = formData.get("company");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const category = formData.get("category");
  const msg = formData.get("msg");

  const text =
`Новая заявка с сайта

Имя: ${name}
Компания: ${company}
Телефон: ${phone}
Email: ${email}
Категория: ${category}
Комментарий: ${msg}`;

  const url = `https://wa.me/77754046186?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");

  form.reset();
});

// запрос прайса
document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
      
      const product = this.closest('.product');
      const title = product.querySelector('.product__title').innerText;
      const meta = product.querySelector('.product__meta').innerText;

      const phone = "77754046186"; // <-- твой номер

      const message = `Здравствуйте! Интересует товар: ${title} (${meta})`;
      
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

      window.open(url, '_blank');
    });
  });

});

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

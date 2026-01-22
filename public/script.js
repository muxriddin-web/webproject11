// ShowPage funksiyasi
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => page.style.display = 'none');

  const activePage = document.getElementById(pageId);
  if (activePage) {
    activePage.style.display = 'block';

    // Footerni ko‘chirish
    const footer = document.getElementById('footer');
    activePage.appendChild(footer);
  }

  // Nav active klass yangilash
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.page === pageId) {
      link.classList.add('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('DOMContentLoaded', () => {
  showPage('home');

  const form = document.getElementById('contactForm');
  if (!form) return console.error('Form topilmadi');

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button');
    btn.disabled = true;

    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      subject: form.subject.value.trim(),
      message: form.message.value.trim(),
    };

    const msgEl = document.getElementById('responseMessage');
    msgEl.textContent = '';

    try {
      const res = await fetch('https://it-center-zw4a.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (result.success) {
        msgEl.textContent = '✅ Xabaringiz yuborildi!';
        msgEl.style.color = 'green';
        form.reset();
      } else {
        msgEl.textContent = '❌ Xatolik: ' + result.message;
        msgEl.style.color = 'red';
      }
    } catch {
      msgEl.textContent = '❌ Serverga ulanishda xatolik.';
      msgEl.style.color = 'red';
    } finally {
      btn.disabled = false;
    }
  });
});


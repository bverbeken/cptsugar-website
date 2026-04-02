// Nav: become solid on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('nav--scrolled', window.scrollY > 60);
}, { passive: true });

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close mobile nav on link click
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// Contact form submission
const form = document.getElementById('contact-form');
form?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Versturen…';

  // Remove previous error if any
  form.querySelector('.form-error')?.remove();

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    });

    if (res.ok) {
      form.innerHTML = '<p class="form-success">Bedankt! We nemen zo snel mogelijk contact op.</p>';
    } else {
      throw new Error('server error');
    }
  } catch {
    btn.disabled = false;
    btn.textContent = 'Verstuur';
    const err = document.createElement('p');
    err.className = 'form-error';
    err.textContent = 'Er ging iets mis. Probeer opnieuw of stuur een e-mail naar booking@captainsugar.be.';
    form.appendChild(err);
  }
});

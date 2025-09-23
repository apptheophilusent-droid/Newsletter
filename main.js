document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded',!expanded);
    navMenu.classList.toggle('active');
});

  // Dark/Light Mode Toggle
  const modeToggle = document.createElement('button');
  modeToggle.textContent = '🌓';
  modeToggle.setAttribute('aria-label', 'Toggle dark mode');
  modeToggle.className = 'mode-toggle';
  document.body.appendChild(modeToggle);

  modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
// Newsletter Form Validation
  const form = document.querySelector('.newsletter form');
  const emailInput = document.getElementById('email');

  form.addEventListener('submit', (e) => {
    const email = emailInput.value.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValid) {
      e.preventDefault();
      alert('Please enter a valid email address.');
      emailInput.focus();
}
});
});

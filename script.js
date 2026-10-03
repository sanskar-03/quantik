const progressBar = document.getElementById('progressBar');
const menuBtn = document.getElementById('menuBtn');
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = `${h > 0 ? (window.scrollY / h) * 100 : 0}%`;
}, { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('mobile-open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('mobile-open')));

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

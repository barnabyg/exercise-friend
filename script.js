// ===== Avatar Carousel =====
function initCarousel(containerId, intervalMs = 2000) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const items = container.querySelectorAll('[class*="avatar-item"]');
  if (items.length === 0) return;
  let current = 0;

  setInterval(() => {
    items[current].classList.remove('active');
    current = (current + 1) % items.length;
    items[current].classList.add('active');
  }, intervalMs);
}

initCarousel('heroCarousel', 2000);
initCarousel('solutionCarousel', 2000);

// ===== Scroll Progress Bar =====
const progressBar = document.getElementById('progressBar');

function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = progress + '%';
}

// ===== Nav Scroll State =====
const nav = document.getElementById('nav');

function updateNav() {
  nav.classList.toggle('scrolled', window.scrollY > 50);
}

// ===== Back to Top =====
const backToTop = document.getElementById('backToTop');

function updateBackToTop() {
  const halfway = document.documentElement.scrollHeight * 0.3;
  backToTop.classList.toggle('visible', window.scrollY > halfway);
}

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Combined Scroll Handler =====
window.addEventListener('scroll', () => {
  updateProgress();
  updateNav();
  updateBackToTop();
}, { passive: true });

// ===== Scroll Animations (Intersection Observer) =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.animate-in').forEach((el) => observer.observe(el));

// ===== Mobile Nav Toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ===== Share Modal =====
const shareModal = document.getElementById('shareModal');
const shareModalClose = document.getElementById('shareModalClose');
const shareLinkedIn = document.getElementById('shareLinkedIn');
const shareX = document.getElementById('shareX');

const shareUrl = window.location.href;
const shareText = 'Check out AI Habit Companion — a different approach to building habits using personalized AI companions instead of streaks and gamification.';

function openShareModal() {
  shareModal.classList.add('active');
  shareLinkedIn.href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(shareUrl);
  shareX.href = 'https://x.com/intent/tweet?text=' + encodeURIComponent(shareText) + '&url=' + encodeURIComponent(shareUrl);
}

function closeShareModal() {
  shareModal.classList.remove('active');
}

document.getElementById('navShareBtn').addEventListener('click', openShareModal);
document.getElementById('heroShareBtn').addEventListener('click', openShareModal);
document.getElementById('ctaShareBtn').addEventListener('click', openShareModal);
shareModalClose.addEventListener('click', closeShareModal);

shareModal.addEventListener('click', (e) => {
  if (e.target === shareModal) closeShareModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeShareModal();
});

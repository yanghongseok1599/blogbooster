// Theme management
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  document.body.classList.toggle('dark', savedTheme === 'dark');
}

function toggleTheme() {
  const isDark = document.body.classList.contains('dark');
  const newTheme = isDark ? 'light' : 'dark';

  document.documentElement.classList.toggle('dark');
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', newTheme);
}

// Initialize theme on page load
initTheme();

// Make toggleTheme available globally
window.toggleTheme = toggleTheme;

document.addEventListener('DOMContentLoaded', () => {
  // Handle smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navHeight = 80; // Height of fixed navigation
        const targetPosition = targetElement.offsetTop - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    });
  }, observerOptions);

  // Observe all sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => observer.observe(section));

  // Navigation background on scroll
  const nav = document.querySelector('header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      nav.classList.add('shadow-lg');
    } else {
      nav.classList.remove('shadow-lg');
    }

    lastScroll = currentScroll;
  });

  // Add click handlers for CTA buttons
  const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');

  ctaButtons.forEach(button => {
    if (button.textContent.includes('무료') || button.textContent.includes('시작')) {
      button.addEventListener('click', () => {
        alert('FitContentAI에 오신 것을 환영합니다!\n\n회원가입 페이지로 이동합니다.');
      });
    }
  });

  // Parallax effect for background blobs
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const blobs = document.querySelectorAll('.blur-3xl');

    blobs.forEach((blob, index) => {
      const speed = 0.5 + (index * 0.1);
      blob.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });

  console.log('FitContentAI Website Loaded ✓');
  console.log('Current theme:', localStorage.getItem('theme') || 'dark');
});

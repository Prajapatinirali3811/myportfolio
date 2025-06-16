console.log("Welcome to Nirali Prajapati's portfolio site!");

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const navLinks = document.getElementById('nav-links');
  const menuToggle = document.getElementById('menuToggle');

  // Mobile menu toggle
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');

    const isOpen = navLinks.classList.contains('show');
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    
    // Accessibility toggle
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  // Smooth scroll for nav links
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Adjust for fixed header height (70px)
        const yOffset = -70;
        const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }

      // Close menu on mobile after click
      navLinks.classList.remove('show');
      document.body.style.overflow = 'auto';

      // Update aria-expanded on menu toggle
      menuToggle.setAttribute('aria-expanded', false);
    });
  });

  // Ripple effect on service cards
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.left = `${e.offsetX}px`;
      ripple.style.top = `${e.offsetY}px`;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Read More toggle
  const readMoreBtn = document.getElementById('readMoreBtn');
  const moreInfo = document.getElementById('moreInfo');

  readMoreBtn.addEventListener('click', () => {
    const isHidden = moreInfo.classList.contains('hidden');

    if (isHidden) {
      moreInfo.classList.remove('hidden');
      readMoreBtn.textContent = "Show Less";
      readMoreBtn.setAttribute('aria-expanded', 'true');
    } else {
      moreInfo.classList.add('hidden');
      readMoreBtn.textContent = "Read More";
      readMoreBtn.setAttribute('aria-expanded', 'false');
    }
  });
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    // smooth scroll
  });
});

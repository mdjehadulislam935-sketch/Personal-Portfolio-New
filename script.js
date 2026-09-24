/**
 * M D Jihadul Islam Sojib (ZihaD) — Interactive Scripts
 * Particle generation, smooth scrolling, Easter egg, and vCard export
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('ZihaD Digital Identity loaded successfully.');

  // Smooth scroll for anchor navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});

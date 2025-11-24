// Populate side labels from section data attributes
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.section[data-label]');
  const sideLabelsContainer = document.querySelector('.side-labels');

  if (!sideLabelsContainer) return;

  // Create side labels
  sections.forEach(function(section) {
    const label = section.getAttribute('data-label');
    if (label) {
      const labelElement = document.createElement('div');
      labelElement.className = 'side-label';
      labelElement.textContent = label;
      sideLabelsContainer.appendChild(labelElement);
    }
  });

  // Highlight active section label on scroll
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        const label = entry.target.getAttribute('data-label');
        const labelElements = document.querySelectorAll('.side-label');

        labelElements.forEach(function(labelEl) {
          if (labelEl.textContent === label) {
            labelEl.style.opacity = entry.isIntersecting ? '1' : '0.3';
          }
        });
      });
    }, {
      threshold: 0.5,
      rootMargin: '-50% 0px'
    });

    sections.forEach(function(section) {
      observer.observe(section);
    });
  }
});

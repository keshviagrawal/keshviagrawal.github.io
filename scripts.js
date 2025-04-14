// eventTracker.js

// Helper: Identify element type in user-friendly terms
function getElementType(el) {
    const tag = el.tagName.toUpperCase();
    if (tag === 'IMG') return 'Image';
    if (tag === 'A') return 'Link';
    if (tag === 'BUTTON') return 'Button';
    if (tag === 'SELECT') return 'Dropdown';
    if (tag === 'P' || tag === 'SPAN' || tag === 'DIV') return 'Text';
    if (tag.startsWith('H')) return 'Heading';
    return tag;
  }
  
  // Log to console in a structured format
  function logEvent(type, element) {
    const timestamp = new Date().toLocaleString();
    const elementType = getElementType(element);
    console.log(`[${timestamp}] | Event Type: ${type} | Element Type: ${elementType}`);
  }
  
  // Track Click Events
  document.addEventListener('click', function (event) {
    logEvent('click', event.target);
  });
  
  // Track View Events (scroll into view using Intersection Observer)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        logEvent('view', entry.target);
      }
    });
  }, {
    threshold: 0.5
  });
  
  // Select sections and visual elements to observe
  const elementsToObserve = document.querySelectorAll('section, img, a, button, select, p, h1, h2, h3');
  elementsToObserve.forEach(el => observer.observe(el));
  
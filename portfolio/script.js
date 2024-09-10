// Add event listener to the button
document.querySelector('button').addEventListener('click', function() {
    alert('You clicked the button!');
  });
  
  // Add smooth scrolling to navigation links
  document.querySelectorAll('nav a').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Add animation to sections on scroll
  document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  });
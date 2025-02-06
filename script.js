// Add any desired interactivity here (e.g., smooth scrolling or animations)
// For now, the contact section is static, but you could expand this with more interactive features later.

document.addEventListener('DOMContentLoaded', function () {
  // Example: smooth scroll if you have a contact section in a longer page
  const links = document.querySelectorAll('.social-icon');

  links.forEach(link => {
    link.addEventListener('mouseover', function () {
      link.style.transform = "scale(1.1)";
    });

    link.addEventListener('mouseout', function () {
      link.style.transform = "scale(1)";
    });
  });
});

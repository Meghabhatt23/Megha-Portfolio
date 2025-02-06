// Simple contact form validation
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
      alert("Thank you for reaching out!");
      // You can add a more sophisticated form submission here (e.g., email or backend integration)
  } else {
      alert("Please fill out all fields.");
  }
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
      });
  });
});

const menu = document.querySelector("#menu");
const navLinksContainer = document.querySelector(".links");
const nav = document.querySelector("nav"); // Add this line to select the nav element

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  nav.classList.toggle('active'); // Make sure the class is toggled on the nav element
}

window.addEventListener("scroll", function () {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll(".links a");

  sections.forEach((section, index) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 100;
    let height = section.offsetHeight;

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => link.classList.remove("active"));
      navLinks[index].classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form"); // Make sure this selects your form

  if (!form) {
      console.error("Form not found in the DOM!");
      return;
  }

  form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevents default form submission

      console.log("Form submitted!"); // Debugging step

      // Fetch the token before sending the email
      fetch("/.netlify/functions/getToken")
          .then(response => response.json())
          .then(data => {
              console.log("Token received:", data.token); // Debugging step
              
              // Now send the email
              return Email.send({
                  SecureToken: data.token, // Use the token
                  To: "meghabhatt241@gmail.com",
                  From: document.querySelector("input[type='email']").value, // Get user email input
                  Subject: "New Contact Form Submission",
                  Body: "Name: " + document.querySelector("input[type='text']").value +
                        "<br>Email: " + document.querySelector("input[type='email']").value +
                        "<br>Message: " + document.querySelector("input[type='text']:nth-of-type(2)").value
              });
          })
          .then(() => {
              console.log("Email sent successfully!"); // Debugging step
              alert("Message sent successfully!");
              form.reset();
          })
          .catch(error => {
              console.error("Error:", error);
              alert("Failed to send message.");
          });
  });
});

AOS.init();
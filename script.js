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
  const form = document.querySelector("#contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    console.log("Form submitted! Fetching token...");

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    fetch("/.netlify/functions/getToken")
      .then(response => {
        if (!response.ok) {
          return response.text().then(text => { throw new Error(`Network response was not ok: ${response.status} - ${response.statusText} - ${text}`); });
        }
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          return response.json();
        } else {
          throw new Error('Response was not JSON');
        }
      })
      .then(data => {
        console.log("Token received:", data.token);

        return Email.send({
          SecureToken: data.token,
          To: "meghabhatt241@gmail.com",
          From: email,
          Subject: "New Contact Form Submission",
          Body: `Name: ${name} <br> Email: ${email} <br> Message: ${message}`
        });
      })
      .then(() => {
        console.log("Email sent successfully!");
        alert("Message sent successfully!");
        form.reset();
      })
      .catch(error => {
        console.error("Error:", error);
        alert(`Failed to send message. Error: ${error.message}`);
      });
  });
});


AOS.init();
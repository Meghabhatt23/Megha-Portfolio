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
document.getElementById("submit-button").addEventListener("click", function () {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
  }

  Email.send({
      SecureToken: "YOUR64c2371b-919f-47f3-a514-ed1cfb41a859", // Replace with your SMTP.js secure token
      To: "meghabhatt241@gmail.com",   // Your email address
      From: email,
      Subject: "New Contact Form Submission",
      Body: `Name: ${name} <br> Email: ${email} <br> Message: ${message}`
  }).then(
      message => alert("Message sent successfully!")
  ).catch(
      error => alert("Error sending message. Please try again.")
  );
});


AOS.init();
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
// Get form element
const form = document.querySelector('#contact-form');

// Add event listener for form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Fetch the form data
    const fullName = document.querySelector('#full-name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    // Fetch the token from the Netlify function
    fetch("/.netlify/functions/getToken")
        .then(response => response.json()) // Parse the response to JSON
        .then(data => {
            // Now that we have the token, send the email
            Email.send({
                SecureToken: data.token, // Use the token fetched from Netlify
                To: "meghabhatt241@gmail.com", // Your email address
                From: email, // Get the sender's email address from the form
                Subject: "New Contact Form Submission", // Email subject
                Body: `Full Name: ${fullName}<br>Email: ${email}<br>Message: ${message}` // Include form data in the body
            })
            .then(() => {
                // Handle success (e.g., display a success message)
                alert("Message sent successfully!");
            })
            .catch((error) => {
                // Handle error (e.g., display an error message)
                alert("Error sending message: " + error);
            });
        })
        .catch((error) => {
            // Handle error when fetching the token
            alert("Error fetching token: " + error);
        });
});

AOS.init();
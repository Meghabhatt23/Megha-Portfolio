document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#contact-form");
  if (!form) {
    console.error("Form not found!");
    return;
  }

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

    fetch("https://67b4cc12448be315d19ed696--famous-bubblegum-3f880a.netlify.app/.netlify/functions/getToken", {
      mode: "cors"
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then(text => {
            throw new Error(`Network response was not ok: ${response.status} - ${response.statusText} - ${text}`);
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log("Token received:", data.token);

        return Email.send({
          SecureToken: data.token,
          To: "meghabhatt241@gmail.com",
          From: email,
          Subject: `New Message from ${name}`,
          Body: `Name: ${name} <br> Email: ${email} <br> Message: ${message}`
        });
      })
      .then(() => {
        console.log("Email sent successfully!");
        alert("Message sent successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
        alert("Failed to send message. Check console for details.");
      });
  });
});

AOS.init();

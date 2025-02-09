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

AOS.init();

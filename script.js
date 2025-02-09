// JavaScript to toggle nav menu for mobile view
const menu = document.querySelector("#menu");
const navLinksContainer = document.querySelector(".links");

menu.onclick = () => {
    console.log("Menu icon clicked");
    menu.classList.toggle("bx-x");
    navLinksContainer.classList.toggle("active");
    console.log(navLinksContainer.classList);
};


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

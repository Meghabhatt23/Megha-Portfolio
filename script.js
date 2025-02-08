const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.onclick = () => {
    menu.classList.toggle('bx-x'); // Toggle icon change
    nav.classList.toggle('active'); // Show/hide menu
};
AOS.init();

document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector("#menu");
    const nav = document.querySelector(".links");

    menu.addEventListener("click", function () {
        menu.classList.toggle('bx-x'); // Toggle icon
        nav.classList.toggle('active'); // Show menu
    });
});


AOS.init();

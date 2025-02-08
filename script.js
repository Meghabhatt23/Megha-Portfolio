document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector("#menu");
    const nav = document.querySelector(".links");

    menu.addEventListener("click", function () {
        menu.classList.toggle('bx-x'); // Toggle icon
        nav.classList.toggle('active'); // Show menu
    });
});
window.addEventListener('scroll', function () {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.links a');

    sections.forEach((section, index) => {
        let top = window.scrollY;
        let offset = section.offsetTop - 100; // Adjust offset
        let height = section.offsetHeight;

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
});
AOS.init();

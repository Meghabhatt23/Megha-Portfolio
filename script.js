// JavaScript to toggle nav menu for mobile view
const menuIcon = document.querySelector('#menu');
const navLinks = document.querySelector('.links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle 'active' class to show/hide the nav
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

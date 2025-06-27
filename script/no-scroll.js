
const mobileMenu = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar__menu');
const body = document.body;

mobileMenu.addEventListener('click', function() {
    body.classList.toggle('no-scroll');
});
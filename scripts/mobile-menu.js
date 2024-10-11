const body = document.querySelector('body');
const navigation = document.querySelector('.main-nav');
const menuBtn = document.querySelector('.menu-btn');
const overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    navigation.classList.toggle('nav-slide');
    overlay.classList.toggle('active');
    body.classList.toggle('fixed');
});
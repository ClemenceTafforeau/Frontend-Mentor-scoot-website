const body = document.querySelector('body');
const navigation = document.querySelector('.main-nav');
const menuBtn = document.querySelector('.menu-btn');
const overlays = document.querySelectorAll('.overlay');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    navigation.classList.toggle('nav-slide');
    body.classList.toggle('fixed-body');
    overlays.forEach((overlay) => {
        if(!menuBtn.classList.contains('open')) {
            overlay.classList.toggle('active');
            setTimeout(() => {
                overlay.classList.replace('displayed', 'hidden');
            }, 300)
        } else {
            overlay.classList.replace('hidden', 'displayed');
            setTimeout(() => {
                overlay.classList.toggle('active');
            }, 3)
        }
    });
});
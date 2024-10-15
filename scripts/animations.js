// Function to animate arrows

function animateArrows(elements) {
    elements.forEach((element) => {
        anime({
            targets: element.querySelectorAll('path'),
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1600,
            delay: function(el, i) { return i * 100 },
            direction: 'normal',
            loop: false
        });
    });
};

// Function to animate the Home hero line element as well as the smaller arrow

function homeHeroArrow(elements) {
    // Animate the first element (.hero-line)
    anime({
        targets: elements[0].querySelector('line'),
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 800,
        delay: function(el, i) { return i * 50 },
        direction: 'normal',
        loop: false,
        complete: function() {
            elements[1].classList.replace('hidden', 'displayed');
            if (elements[1]) {
                anime({
                    targets: elements[1].querySelectorAll('path'),
                    strokeDashoffset: [anime.setDashoffset, 0],
                    easing: 'easeInOutSine',
                    duration: 1200,
                    direction: 'normal',
                    loop: false,
                    complete: function() {
                        elements[2].classList.replace('hidden', 'displayed');
                        if(elements[2]) {
                            anime({
                                targets: elements[2].querySelectorAll('circle'),
                                strokeDashoffset: [anime.setDashoffset, 0],
                                easing: 'easeInOutSine',
                                delay: anime.stagger(200),
                                duration: 800,
                                direction: 'normal',
                                loop: false,
                                complete: function() {
                                    elements[2].classList.add('circle-fill');
                                }
                            });
                        }
                    },
                });
            }
        }
    });
};

// Function to animate the line in the Guide section of the Home page

function guideAnimation(element) {
    anime({
        targets: element.querySelector('line'),
        strokeDashoffset: [anime.setDashoffset, 0], // Animate from the full length to 0
        opacity: [0, 1],
        easing: 'easeInOutSine',
        duration: 2200, // Duration of the animation
        direction: 'normal',
        loop: false
    });
}

// Function to animate the guide cards in the Home page

function guideCardsAnimation(elements) {
    anime({
        targets: elements,
        opacity: [0, 1],
        easing: 'easeInOutSine',
        delay: anime.stagger(700),
        duration: 800,
        direction: 'normal',
        loop: false
    });
}

// Function to add the fade-in effect of images

function fadeInEffect(elements) {

    elements.forEach((element) => {
        const isVisible = element.getAttribute('data-visible') === 'true';

        if(!isVisible) {
            element.setAttribute('data-visible', 'true');
        }
    });
};

// IntersectionObserver callback
const inViewport = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (!entry.target.hasAttribute('data-animated')) {
                if (entry.target.matches('.feature-img')) {
                    animateArrows([entry.target]);
                    fadeInEffect([entry.target]); 
                }
                if (entry.target.matches('.guide-card')) {
                    guideCardsAnimation(document.querySelectorAll('.guide-card'));
                    guideAnimation(guideLineElement);
                }
            }
            entry.target.setAttribute('data-animated', 'true');
            if (entry.target.matches('.guide-card')) {
                document.querySelectorAll('.guide-card').forEach(guideCard => {
                    guideCard.setAttribute('data-animated', 'true');
                })
                guideLineElement.setAttribute('data-animated', 'true');
            }

            observer.unobserve(entry.target);
            if (entry.target.matches('.guide-card')) {
                document.querySelectorAll('.guide-card').forEach(guideCard => {
                    observer.unobserve(guideCard);
                })
                observer.unobserve(guideLineElement);
            }
        }
    });
};

// Set up the IntersectionObserver

const Obs = new IntersectionObserver(inViewport);
document.querySelectorAll('.arrow, .feature-img').forEach(el => Obs.observe(el));

const guideLineElement = document.querySelector('.guide-line');
const guideCards = document.querySelectorAll('.guide-card');

if(guideLineElement) {
    Obs.observe(guideLineElement);
    guideCards.forEach(el => Obs.observe(el));
};

// On load animations

window.addEventListener('load', () => {
    const elementsToAnimate = [
        document.querySelector('.hero-line'),
        document.querySelector('.smaller-arrow'),
        document.querySelector('.hero-circles'),
    ];
    homeHeroArrow(elementsToAnimate);
});

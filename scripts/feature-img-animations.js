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
            }
            entry.target.setAttribute('data-animated', 'true');

            observer.unobserve(entry.target);
        }
    });
};

// Set up the IntersectionObserver

const Obs = new IntersectionObserver(inViewport);
document.querySelectorAll('.feature-img').forEach(el => Obs.observe(el));
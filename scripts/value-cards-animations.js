// Function to animate the value cards (About and Careers pages)

function animateValueCards(elements) {
    anime({
        targets: elements,
        opacity: [0, 1],
        easing: 'easeInOutSine',
        delay: anime.stagger(700),
        duration: 700,
        direction: 'normal',
        loop: false
    });
}

// IntersectionObserver callback

const inViewport = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (!entry.target.hasAttribute('data-animated')) {
                if (entry.target.matches('.value-card')) {
                    animateValueCards(document.querySelectorAll('.value-card'));
                }
            }

            if (entry.target.matches('.value-card')) {
                document.querySelectorAll('.value-card').forEach(valueCard => {
                    valueCard.setAttribute('data-animated', 'true');
                })
            }

            if (entry.target.matches('.value-card')) {
                document.querySelectorAll('.value-card').forEach(valueCard => {
                    observer.unobserve(valueCard);
                })
            }
        }
    });
};

// Set up the IntersectionObserver

const Obs = new IntersectionObserver(inViewport);
document.querySelectorAll('.value-card').forEach(el => Obs.observe(el));
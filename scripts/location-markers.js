// Function to animate the location markers (Locations page)
function animateLocationMarkers(elements) {
    // Start the first animation
    anime({
        targets: elements,
        opacity: [0, 1],
        translateY: [-64, 0],
        rotateZ: [20, 0],
        easing: 'easeOutElastic(1, .8)',
        delay: anime.stagger(400), // Stagger between elements
        duration: 800,
        direction: 'normal',
        loop: false,
    });
}

function wiggleLocationMarkers(element) {
    anime({
        targets: element,
        rotateZ: [
            { value: 5 },
            { value: -5 },
            { value: 3 },
            { value: -3 },
            { value: 1 },
            { value: -1 },
            { value: 0 }
        ],
        easing: 'easeInOutSine',
        duration: 900,
        loop: false,
    });
}

const elementsToAnimate = document.querySelectorAll('.location-tag');

window.addEventListener('load', () => {
    animateLocationMarkers(elementsToAnimate);
});

elementsToAnimate.forEach((element) => {
    element.addEventListener('mouseover', () => {
        wiggleLocationMarkers(element);
    });
    element.addEventListener('focus', () => {
        wiggleLocationMarkers(element);
    });
});
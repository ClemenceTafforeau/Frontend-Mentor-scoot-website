const faqArticles = document.querySelectorAll('.faq-content article');

faqArticles.forEach((faqArticle) => {
    const button = faqArticle.querySelector('button');
    const answer = faqArticle.querySelector('.faq-desc');

    // Caching values
    const computedStyle = window.getComputedStyle(answer);
    const textMarginBottom = parseFloat(computedStyle.marginBottom) || 0;

    button.addEventListener('click', () => {
        toggleFaqContent();
    });

    // button.addEventListener('focus', () => {
    //     button.classList.add('focused');
    // });

    // button.addEventListener('blur', () => {
    //     if (document.activeElement !== button) {
    //         button.classList.remove('focused'); // Remove focus styles
    //     }
    // });

    // button.addEventListener('keydown', (event) => {
    //     if(event.key === 'Enter' || event.key === ' ') {
    //         event.preventDefault(); // Prevent default behavior for Space
    //         toggleFaqContent();
    //     }
    // })

    function toggleFaqContent() {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';

        button.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');

        if (!isExpanded) {
            answer.classList.replace('hidden', 'displayed');
            answer.style.maxHeight = 0;
            answer.style.marginBottom = 0;
            setTimeout(() => {
                answer.style.maxHeight = answer.scrollHeight + "px";
                answer.style.marginBottom = textMarginBottom + "px";
            }, 5);
        } else {
            answer.style.maxHeight = answer.scrollHeight + textMarginBottom + "px";
            setTimeout(() => {
                answer.style.maxHeight = 0;
                answer.style.marginBottom = 0;
            }, 10);
            setTimeout(() => {
                answer.classList.replace('displayed', 'hidden');
            }, 600);
        }
    }
});

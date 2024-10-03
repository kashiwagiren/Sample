window.onload = () => {
    const introText = document.querySelector('.fade-in');
    const typedText = document.querySelector('.typed-text');
    const scrollDownButton = document.getElementById('scrollDown');
    const section2 = document.getElementById('section-2');

    scrollDownButton.style.opacity = 0;
    scrollDownButton.style.cursor = "default";

    setTimeout(() => {
        introText.classList.add('show');
        introText.style.transform = "translateY(600)";
    }, 500);

    const occupationText = "A Computer Engineering Student.";
    let index = 0;

    function typeEffect() {
        if (index < occupationText.length) {
            typedText.textContent += occupationText.charAt(index);
            index++;
            setTimeout(typeEffect, 50);
        }   else    {
            setTimeout(() => {
                
                scrollDownButton.style.opacity = 1;
                scrollDownButton.style.cursor = "pointer";
            }, 500);
        }
    }

    setTimeout(() => {
        typedText.style.opacity = 1;
        
        typeEffect();
    }, 2000);

    scrollDownButton.addEventListener('click', () => {
        section2.scrollIntoView({ behavior: 'smooth' });
        scrollDownButton.style.opacity = 0;
    });
}
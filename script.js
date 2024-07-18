document.addEventListener('DOMContentLoaded', () => {
    const spans = document.querySelectorAll('.waviy span');
    const headers1 = document.querySelectorAll('h1');
    const headers2 = document.querySelectorAll('h2');
    const headers3 = document.querySelectorAll('h3');
    const paragraphs = document.querySelectorAll('p');
    const buttons = document.querySelectorAll('button:not(.panicButton)');
    
    spans.forEach(span => {
        span.addEventListener('mouseover', () => {
            span.classList.add('bounce');
        });

        span.addEventListener('animationend', () => {
            span.classList.remove('bounce');
        });
    });

    // Mirror effect
    document.querySelector('.invertButton').addEventListener('click', function() {
        document.querySelector('.helloWorld .textContent').classList.toggle('mirror');
    });

    // Randomize color
    document.querySelector('.randomizeButton').addEventListener('click', function() {
        const randomizeColorDiv = document.querySelector('.randomizeColor');
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        randomizeColorDiv.style.color = randomColor;
    });

    // Coffee pop-up
    const coffeeButton = document.querySelector('.coffeeButton');
    const popup = document.querySelector('.popup');
    const popupOverlay = document.querySelector('.popup-overlay');
    const closePopup = document.querySelector('.popup .close');
    const emailButton = document.querySelector('.emailButton');

    coffeeButton.addEventListener('click', function() {
        popup.style.display = 'flex';
        popupOverlay.style.display = 'block';
    });

    closePopup.addEventListener('click', function() {
        popup.style.display = 'none';
        popupOverlay.style.display = 'none';
    });

    popupOverlay.addEventListener('click', function() {
        popup.style.display = 'none';
        popupOverlay.style.display = 'none';
    });

    emailButton.addEventListener('click', function() {
        window.location.href = 'mailto:marasatilu@gmail.com?subject=Invitation for Coffee&body=Hi Mara,';
    });

    // Falling text effect with random delay
    document.querySelector('.panicButton').addEventListener('click', function() {
        spans.forEach(span => {
            span.style.animationDelay = `${Math.random() * 2}s`; // Random delay between 0 and 2 seconds
            span.classList.add('fall');
        });
        headers1.forEach(h1 => {
            h1.style.animationDelay = `${Math.random() * 2}s`; // Random delay between 0 and 2 seconds
            h1.classList.add('fall');
        });
        headers2.forEach(h2 => {
            h2.style.animationDelay = `${Math.random() * 2}s`; // Random delay between 0 and 2 seconds
            h2.classList.add('fall');
        });
        headers3.forEach(h3 => {
            h3.style.animationDelay = `${Math.random() * 2}s`; // Random delay between 0 and 2 seconds
            h3.classList.add('fall');
        });
        paragraphs.forEach(p => {
            p.style.animationDelay = `${Math.random() * 2}s`; // Random delay between 0 and 2 seconds
            p.classList.add('fall');
        });
        buttons.forEach(button => {
            button.style.animationDelay = `${Math.random() * 2}s`; // Random delay between 0 and 2 seconds
            button.classList.add('fall');
        });
    });
});

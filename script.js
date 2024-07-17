document.addEventListener('DOMContentLoaded', () => {
    const spans = document.querySelectorAll('.waviy span');
    
    spans.forEach(span => {
        span.addEventListener('mouseover', () => {
            span.classList.add('bounce');
        });

        span.addEventListener('animationend', () => {
            span.classList.remove('bounce');
        });
    });
});


//mirror effect

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.invertButton').addEventListener('click', function() {
        document.querySelector('.helloWorld .textContent').classList.toggle('mirror');
    });



    //randomize color

    document.querySelector('.randomizeButton').addEventListener('click', function() {
        const randomizeColorDiv = document.querySelector('.randomizeColor');
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        randomizeColorDiv.style.color = randomColor;
    });

    //coffepop-up

    const coffeeButton = document.querySelector('.coffeeButton');
    const popup = document.querySelector('.popup');
    const popupOverlay = document.querySelector('.popup-overlay');
    const closePopup = document.querySelector('.popup .close');
    const emailButton = document.querySelector('.emailButton');

    coffeeButton.addEventListener('click', function() {
        popup.style.display = 'block';
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
});
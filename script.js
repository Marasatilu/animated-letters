document.addEventListener('DOMContentLoaded', () => {
    const spans = document.querySelectorAll('.waviy span');
    const headers1 = document.querySelectorAll('h1');
    const headers2 = document.querySelectorAll('h2');
    const headers3 = document.querySelectorAll('h3');
    const paragraphs = document.querySelectorAll('p');
    const buttons = document.querySelectorAll('button:not(.undoButton)');
    const panicButton = document.querySelector('.panicButton'); // Selecciona el botón Panic Button
    const undoButton = document.querySelector('.undoButton'); // Selecciona el botón de Undo
    

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





    // Función para añadir clase 'fall' a elementos
    function addFallClass() {
        
        spans.forEach(span => {
            span.style.animationDelay = `${Math.random() * 2}s`; // Retraso aleatorio entre 0 y 2 segundos
            span.classList.add('fall');
        });
        headers1.forEach(h1 => {
            h1.style.animationDelay = `${Math.random() * 2}s`; // Retraso aleatorio entre 0 y 2 segundos
            h1.classList.add('fall');
        });
        headers2.forEach(h2 => {
            h2.style.animationDelay = `${Math.random() * 2}s`; // Retraso aleatorio entre 0 y 2 segundos
            h2.classList.add('fall');
        });
        headers3.forEach(h3 => {
            h3.style.animationDelay = `${Math.random() * 2}s`; // Retraso aleatorio entre 0 y 2 segundos
            h3.classList.add('fall');
        });
        paragraphs.forEach(p => {
            p.style.animationDelay = `${Math.random() * 2}s`; // Retraso aleatorio entre 0 y 2 segundos
            p.classList.add('fall');
        });
        buttons.forEach(button => {
            button.style.animationDelay = `${Math.random() * 2}s`; // Retraso aleatorio entre 0 y 2 segundos
            button.classList.add('fall');
        });
    }

    // Función para eliminar clase 'fall' de elementos
    function removeFallClass() {
        spans.forEach(span => {
            span.classList.remove('fall');
        });
        headers1.forEach(h1 => {
            h1.classList.remove('fall');
        });
        headers2.forEach(h2 => {
            h2.classList.remove('fall');
        });
        headers3.forEach(h3 => {
            h3.classList.remove('fall');
        });
        paragraphs.forEach(p => {
            p.classList.remove('fall');
        });
        buttons.forEach(button => {
            button.classList.remove('fall');
        });
    }

    // Mostrar botón Undo y ocultar Panic Button cuando se presiona Panic Button
    panicButton.addEventListener('click', function() {
        addFallClass(); // Aplicar animación a elementos
        undoButton.style.display = 'block'; // Mostrar botón Undo
        panicButton.style.display = 'none'; // Ocultar botón Panic Button
    });

    // Undo button functionality
    undoButton.addEventListener('click', function() {
        undoButton.style.display = 'none'; // Ocultar botón Undo
        panicButton.style.display = 'block'; // Mostrar botón Panic Button
        removeFallClass(); // Quitar animación de elementos
    });

    











});

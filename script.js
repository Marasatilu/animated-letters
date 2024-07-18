document.addEventListener('DOMContentLoaded', () => {
    const spans = document.querySelectorAll('.waviy span');
    const headers1 = document.querySelectorAll('h1');
    const headers2 = document.querySelectorAll('h2');
    const headers3 = document.querySelectorAll('h3');
    const paragraphs = document.querySelectorAll('p');
    const buttons = document.querySelectorAll('button:not(.undoButton)');
    const panicButton = document.querySelector('.panicButton'); // Selecciona el botón Panic Button
    const undoButton = document.querySelector('.undoButton'); // Selecciona el botón de Undo
    
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

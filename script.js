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
        document.querySelector('.helloWorld').classList.toggle('mirror');
    });
});
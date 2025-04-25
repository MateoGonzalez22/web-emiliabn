const arrow = document.getElementById('scroll-arrow');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        arrow.classList.add('opacity-0');
    } else {
        arrow.classList.remove('opacity-0');
    }
});

arrow.addEventListener('click', () => {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

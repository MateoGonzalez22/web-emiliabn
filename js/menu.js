const menu = document.getElementById('mobile-menu');
const openBtn = document.getElementById('hamburger-btn');
const closeBtn = document.getElementById('close-btn');



let startX = null;

const openMenu = () => {
    if (!menu.classList.contains('open')) {
        menu.classList.add('open');
    }
};

const closeMenu = () => {
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
    }
};

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

menu.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

menu.addEventListener('touchend', (e) => {
    if (startX === null) return;

    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - startX;

    if (deltaX > 50) {
        closeMenu();
    }

    startX = null;
});

// Esto evita que el botón quede "desactivado" tras un swipe
document.addEventListener('DOMContentLoaded', () => {
    menu.classList.remove('open');
});
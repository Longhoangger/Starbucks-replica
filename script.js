const btn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

function navToggle(){
    btn.classList.toggle('open');
    mobileMenu.classList.toggle('hidden');
    document.body.classList.toggle('stop-scroll');
    overlay.classList.toggle('show-overlay');
}

btn.addEventListener('click', navToggle);
const hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu"),
    closeElem = document.querySelector(".menu__close");

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__exp-percent'),
    line = document.querySelectorAll('.skills__exp-line span');

counters.forEach((item, i) => {
    line[i].style.width = item.innerHTML;
});
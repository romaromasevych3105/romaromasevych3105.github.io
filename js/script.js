const hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu"),
    closeElem = document.querySelector(".menu__close"),
    link = document.querySelectorAll(".menu__item, .btn, .promo__link");

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

link.forEach((i) => {
    i.addEventListener('click', function (event) {
        event.preventDefault();
        menu.classList.remove('active');
        let anchor = document.getElementById(i.dataset.value);
        anchor.scrollIntoView({
            behavior: "smooth"
        });

    });
});


const counters = document.querySelectorAll('.skills__exp-percent'),
    line = document.querySelectorAll('.skills__exp-line span');

counters.forEach((item, i) => {
    line[i].style.width = item.innerHTML;
});
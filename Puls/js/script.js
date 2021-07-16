//Слик слайдер
$(document).ready(function () {
    $('.carousel__slider').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/png/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/png/arrow_right.png"></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                    adaptiveHeight: false,
                }
            },
        ],
    });

    //Табы

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                e.preventDefault();
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //Модальные окна

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });

    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });

    $('.button_small').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    //Форма валидиации

    function validateForm(form) {
        $(form).validate({
            rules: {
                name: "required",
                email: {
                    required: true,
                    email: true
                },
                phone: "required"
            },
            messages: {
                name: "Введите свое имя",
                email: {
                    required: "Введите вашу почту",
                    email: "Не верный формат почты"
                },
                phone: "Введите ваш номер телефона"
            },
        });
    }
    validateForm('#consultation-form')
    validateForm('#order form')
    validateForm('#consultation form')

    //Масска ввода номера телефона

    $('input[name=phone]').mask("+7(999)999-9999");

    //Скрипт отправки письма

    $('form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false
    });

    //Плавная прокрутка вверх и пропадание после определенного количества скролов

    $("a[href^='#']").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1120) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    //Запуск плагина WOW

    new WOW().init();

    //Карта

    //     let map;

    //     function initMap() {
    //         map = new google.maps.Map(document.getElementById('#map'), {
    //             center: { lat: 55.769735639945544, lng: 37.646872751341384 },
    //             zoom: 10,
    //         });
    //     }

    // });

    // Слайдер

    // const slider = tns({
    //     container: '.carousel__slider',
    //     items: 1,
    //     slideBy: 'page',
    //     autoplay: false,
    //     controls: false,
    //     autoHeight: true,
    //     speed: 1200,
    //     autoplay: true,
    //     autoplayButtonOutput: false,
    //     autoplayTimeout: 10000,
    //     nav: false
    // });
    // document.querySelector('.prev').onclick = function () {
    //     slider.goTo('prev');
    // };
    // document.querySelector('.next').onclick = function () {
    //     slider.goTo('next');
    // };
});
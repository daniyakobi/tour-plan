$(document).ready(function() {
  // Меню бургер для мобильных устройств
  $('.menu-button').click(function(event) {
    $('.menu-button').toggleClass('active-burger');
    $('.mobile-menu').toggleClass('active-menu');
    $('body').toggleClass('lock');   
  });

  // Переход по странице с использованием якорных ссылок
  $(".navbar-menu").on("click","a", function (event) {
    $('.menu-button').removeClass('active-burger');
    $('.mobile-menu').removeClass('active-menu');
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top - $('.navbar').height();
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });
  // Модальное окно
  var modalButton = $('[data-toggle=modal-button]');
  var closeModal = $('[data-toggle=modal-close]');
  // Модальное окно с формой обратной связи
  modalButton.click(function(event) {
    $('.modal__overlay, .modal__dialog').toggleClass('active-modal');
    $('body').toggleClass('lock');   
  });
  closeModal.click(function(event) {
    $('.modal__overlay, .modal__dialog').removeClass('active-modal');
    $('body').removeClass('lock');   
  });

  // Закрытие модального окна по нажатию кнопки Escape
  $(document).keydown(function(btnEsc) {
    if(btnEsc.keyCode == 27) {
      $('.modal__overlay, .modal__dialog').removeClass('active-modal');
      $('body').removeClass('lock');   
    };
  });

  // Обработка формы
  // Маски для полей ввода
  $('.modal__phone, .footer__phone').mask('0(000) 000-00-00');

  // Валидация форм
  $('.modal__form').validate({
    errorClass: "invalid",
    messages: {
      name: {
        require: "Please specify your name",
        minlength: "The name must be at least 3 letters long",
      },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com",
      },
      phone: {
        required: "Enter your phone number",
        phone: "Your phone must be in the format of 0(000) 000-00-00",
      },
    },
  });
  $('.footer__form').validate({
    errorClass: "invalid",
    messages: {
      name: {
        require: "Please specify your name",
        minlength: "The name must be at least 3 letters long",
      },
      phone: {
        required: "Enter your phone number",
        phone: "Your phone must be in the format of 0(000) 000-00-00",
      },
    },
  });
  $('.newsletter__subscribe').validate({
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    },
  });
});
// Карта
const locationName = location.pathname.slice(location.pathname.lastIndexOf('/'));
if (locationName === '/' || locationName === '/index.html') {
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [7.574017, 79.803766],
            zoom: 13
        }, {
            searchControlProvider: 'yandex#search'
        }),
  
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),
  
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Grand Hilton Hotel'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/place.svg',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        })

    myMap.geoObjects
     .add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
  });

  // Слайдеры
  var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
  
  var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
  
  var packagesSlider = new Swiper('.packages-slider', {
    // Optional parameters
    loop: true,
    // If we need pagination
    lazy: {
      loadPrevNext: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

  });
  
  AOS.init();

};




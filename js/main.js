// Карта
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
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это красивая метка'
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
});

$(document).ready(function() {
  $('.menu-button').click(function(event) {
    $('.menu-button').toggleClass('active-burger');
    $('.mobile-menu').toggleClass('active-menu');
    $('body').toggleClass('lock');   
  });

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
});


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
})

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
})

var packagesSlider = new Swiper('.packages-slider', {
  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
})
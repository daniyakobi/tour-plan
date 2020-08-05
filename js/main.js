$(document).ready(function(){
  // Меню бургер для мобильных устройств
  $('.menu-button').click(function(event){$('.menu-button').toggleClass('active-burger');$('.mobile-menu').toggleClass('active-menu');$('body').toggleClass('lock');});
  // Переход по странице с использованием якорных ссылок
  $(".navbar-menu").on("click","a", function (event){$('.menu-button').removeClass('active-burger');$('.mobile-menu').removeClass('active-menu');event.preventDefault();var id  = $(this).attr('href'),top = $(id).offset().top - $('.navbar').height();$('body,html').animate({scrollTop: top}, 1500);});
  // Модальное окно
  var modalButton = $('[data-toggle=modal-button]');var closeModal = $('[data-toggle=modal-close]');
  // Модальное окно с формой обратной связи
  modalButton.click(function(event){$('.modal__overlay, .modal__dialog').toggleClass('active-modal');$('body').toggleClass('lock');});
  closeModal.click(function(event){$('.modal__overlay, .modal__dialog').removeClass('active-modal');$('body').removeClass('lock');});
  // Закрытие модального окна по нажатию кнопки Escape
  $(document).keydown(function(btnEsc){if(btnEsc.keyCode == 27){$('.modal__overlay, .modal__dialog').removeClass('active-modal');$('body').removeClass('lock');};});
  // Обработка формы
  // Маски для полей ввода
  $('.modal__phone, .footer__phone').mask('0(000) 000-00-00');
  // Валидация форм
  $('.modal__form').validate({errorClass: "invalid",messages: {name: {require: "Please specify your name",minlength: "The name must be at least 3 letters long",},email: {required: "We need your email address to contact you",email: "Your email address must be in the format of name@domain.com",},phone: {required: "Enter your phone number",phone: "Your phone must be in the format of 0(000) 000-00-00",},},});
  $('.footer__form').validate({errorClass: "invalid",messages: {name: {require: "Please specify your name",minlength: "The name must be at least 3 letters long",},phone: {required: "Enter your phone number",phone: "Your phone must be in the format of 0(000) 000-00-00",},},});
  $('.newsletter__subscribe').validate({errorClass: "invalid",email: {required: "We need your email address to contact you",email: "Your email address must be in the format of name@domain.com"},});
  // Слайдеры
  var hotelSlider = new Swiper('.hotel-slider', {loop: true,navigation: {nextEl: '.hotel-slider__button--next',prevEl: '.hotel-slider__button--prev',},keyboard: {enabled: true,onlyInViewport: false,},});
  var reviewsSlider = new Swiper('.reviews-slider', {loop: true,navigation: {nextEl: '.reviews-slider__button--next',prevEl: '.reviews-slider__button--prev',},keyboard: {enabled: true,onlyInViewport: false,},});
  AOS.init();
});




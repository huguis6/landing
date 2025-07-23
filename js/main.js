const swiper = new Swiper('.mySwiper', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  grabCursor: true,
  slidesPerView: 1,
  centeredSlides: true,
  speed: 900,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

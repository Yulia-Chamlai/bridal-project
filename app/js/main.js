const swiper = new Swiper(".accessories__slider", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,
  navigation: {
    nextEl: ".accessories__btn-next",
    prevEl: ".accessories__btn-prev",
  },
});

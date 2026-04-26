const viewLine = document.querySelector('.mode__btn-line');
const viewGrid = document.querySelector('.mode__btn-grid');
const viewContainer = document.querySelector('.view-mode__container');

viewGrid.addEventListener('click', () => {
  viewContainer.classList.add('view-mode__container--grid');
  viewContainer.classList.remove('view-mode__container--line');

});
viewLine.addEventListener('click', () => {
  viewContainer.classList.add('view-mode__container--line');
  viewContainer.classList.remove('view-mode__container--grid');
});


const swiper = new Swiper(".accessories__slider", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,
  navigation: {
    nextEl: ".accessories__btn-next",
    prevEl: ".accessories__btn-prev",
  },
});
const swiperReview = new Swiper(".reviews__slider", {
  loop: true,
  slidesPerView: 12,
  spaceBetween: 16,
  pagination: {
    el: ".reviews__slider-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".reviews__btn-next",
    prevEl: ".reviews__btn-prev",
  },
});

const rangeSlider = document.querySelector(".range__slider");
const inputMin = document.querySelector(".range__min");
const inputMax = document.querySelector(".range__max");

noUiSlider.create(rangeSlider, {
  start: [300, 3000],
  step: 100,
  range: {
    min: 300,
    max: 3000,
  },
  format: {
    to: value => Math.round(value),
    from: value => Number(value),    
  },

});

rangeSlider.noUiSlider.on("update", (values, handle) => {
  if (handle === 0) {
    inputMin.value = values[0]
  } else {
    inputMax.value = values[1]
  }
  });
  inputMin.addEventListener('change', () => {
   rangeSlider.noUiSlider.set([inputMin.value, null])
  })
  inputMax.addEventListener('change', () => {
   rangeSlider.noUiSlider.set([null, inputMax.value])
  })
import {Navigation, Swiper} from "swiper";

export function handleSwiper() {
  const container = document.querySelector('.swiper')

  if (!container) {
    return
  }

  const swiper = new Swiper(container, {
    slidesPerView: 1,
    spaceBetween: 16,
    slidesPerGroup: 3,
    breakpoints: {
      // when window width is >= 576px
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 32
      }
    },
    modules: [Navigation],

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

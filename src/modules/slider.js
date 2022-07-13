import Swiper, { Navigation, Pagination } from 'swiper';


export const sliderDocs = () => {
  let catalogSlider = null;
  let mediaQuerySize = 1090;

  const catalogSliderInit = () => {
    if (!catalogSlider) {
      catalogSlider = new Swiper('.transparency-slider-wrap', {
        speed: 400,
        spaceBetween: 500,

        modules: [Navigation, Pagination],

        loop: true,

        pagination: {
          el: '.swiper-pagination',
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        slidesPerView: 1
      });
    }
  };

  function catalogSliderDestroy() {
    if (catalogSlider) {
      catalogSlider.destroy();
      catalogSlider = null;
    }
  }

  window.addEventListener('resize', () => {
    const windowWidth = document.documentElement.clientWidth;

    if (windowWidth <= mediaQuerySize) {
      catalogSliderInit();
    } else {
      catalogSliderDestroy();
    }
  });
};

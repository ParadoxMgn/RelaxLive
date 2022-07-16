import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';

export const sliderPortfolioMobile = () => {
  let catalogSlider = null;
  let mediaQuerySize = 576;

  const catalogSliderInit = () => {
    if (!catalogSlider) {
      catalogSlider = new Swiper('.portfolio-slider-mobile', {
        speed: 400,
        loop: true,
        modules: [Navigation, Pagination],
        navigation: {
          nextEl: '.swiper-button-next2',
          prevEl: '.swiper-button-prev2',
        },
        pagination: {
          el: '.swiper-pagination-1',
          type: 'fraction',
          renderFraction: function (currentClass, totalClass) {
            return `<div class="slider-counter-content">
                      <div class="slider-counter-content__current ${currentClass}"></div>
                      <div class="slider-counter-content__total ${totalClass}"></div>
                    </div>`;
          },
        },
        slidesPerView: 1
      });
    }
  };

  const catalogSliderDestroy = () => {
    if (catalogSlider) {
      catalogSlider.destroy();
      catalogSlider = null;
    }
  };

  if (!catalogSlider && document.documentElement.clientWidth < mediaQuerySize) {
    catalogSliderInit();
  }

  window.addEventListener('resize', () => {
    const windowWidth = document.documentElement.clientWidth;

    if (windowWidth < mediaQuerySize) {
      catalogSliderInit();
    } else {
      catalogSliderDestroy();
    }
  });
};

export const sliderPortfolio = () => {
  let catalogSlider = null;
  let mediaQuerySize = 576;

  const catalogSliderInit = () => {
    if (!catalogSlider) {
      catalogSlider = new Swiper('.portfolio-slider', {
        speed: 400,
        modules: [Navigation, Pagination],
        navigation: {
          nextEl: '.swiper-button-next1',
          prevEl: '.swiper-button-prev1',
        },
        breakpoints: {
          576: {
            slidesPerView: 1.1
          },
          901: {
            slidesPerView: 2
          },
          1025: {
            slidesPerView: 2.7
          },
          1141: {
            slidesPerView: 2.9
          },
          1200: {
            slidesPerView: 3
          }
        }
      });
    }
  };

  const catalogSliderDestroy = () => {
    if (catalogSlider) {
      catalogSlider.destroy();
      catalogSlider = null;
    }
  };

  if (!catalogSlider && document.documentElement.clientWidth >= mediaQuerySize) {
    catalogSliderInit();
  }

  window.addEventListener('resize', () => {
    const windowWidth = document.documentElement.clientWidth;

    if (windowWidth >= mediaQuerySize) {
      catalogSliderInit();
    } else {
      catalogSliderDestroy();
    }
  });
};

export const sliderDocs = () => {
  let catalogSlider = null;
  let mediaQuerySize = 1090;

  const catalogSliderInit = () => {
    if (!catalogSlider) {
      catalogSlider = new Swiper('.transparency-slider-wrap', {
        speed: 400,
        spaceBetween: 500,
        modules: [Navigation, Pagination],
        navigation: {
          nextEl: '.swiper-button-next3',
          prevEl: '.swiper-button-prev3',
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

  if (!catalogSlider && document.documentElement.clientWidth <= mediaQuerySize) {
    catalogSliderInit();
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

export const sliderBenefits = () => {
  let catalogSlider = null;
  let mediaQuerySize = 1024;

  const catalogSliderInit = () => {
    if (!catalogSlider) {
      catalogSlider = new Swiper('.formula-slider-wrap', {
        speed: 700,
        spaceBetween: 20,
        loop: true,
        modules: [Navigation, Pagination],
        navigation: {
          nextEl: '.swiper-button-next4',
          prevEl: '.swiper-button-prev4',
        },
        breakpoints: {
          320: {
            slidesPerView: 1
          },
          750: {
            slidesPerView: 3
          }
        },
        slideToClickedSlide: true,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 10,
          stretch: 0,
          slideShadows: true
        }
      });
    }
  };

  function catalogSliderDestroy() {
    if (catalogSlider) {
      catalogSlider.destroy();
      catalogSlider = null;
    }
  }

  if (!catalogSlider && document.documentElement.clientWidth <= mediaQuerySize) {
    catalogSliderInit();
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

export const sliderReviews = () => {
  let catalogSlider = null;
  let mediaQuerySize = 3800;

  const catalogSliderInit = () => {
    if (!catalogSlider) {
      catalogSlider = new Swiper('.reviews-slider-wrap', {
        speed: 500,
        spaceBetween: 1650,
        loop: true,
        modules: [Navigation, Pagination],
        navigation: {
          nextEl: '.swiper-button-next5',
          prevEl: '.swiper-button-prev5',
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

  if (!catalogSlider && document.documentElement.clientWidth <= mediaQuerySize) {
    catalogSliderInit();
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

export const sliderServices = () => {
  let catalogSlider = null;
  let mediaQuerySize = 575;

  const catalogSliderInit = () => {
    if (!catalogSlider) {
      catalogSlider = new Swiper('.services', {
        speed: 500,
        spaceBetween: 200,
        loop: true,
        modules: [Navigation, Pagination, Autoplay, EffectFade],
        slidesPerView: 1,
        // effect: 'fade',
        // fadeEffect: {
        //   crossFade: true
        // },
        autoplay: {
          delay: 2000,
        },
      });
    }
  };

  function catalogSliderDestroy() {
    if (catalogSlider) {
      catalogSlider.destroy();
      catalogSlider = null;
    }
  }

  if (!catalogSlider && document.documentElement.clientWidth <= mediaQuerySize) {
    catalogSliderInit();
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

export const sliderRepairTypes = () => {
  let catalogSlider = null;
  let mediaQuerySize = 1024;

  const catalogSliderInit = () => {
    if (!catalogSlider) {
      catalogSlider = new Swiper('.nav-popup-repair-types', {
        speed: 400,

        modules: [Navigation, Pagination],
        navigation: {
          nextEl: '.swiper-button-next6',
          prevEl: '.swiper-button-prev6',
        },
        slidesPerView: 1,
        breakpoints: {
          320: {
            slidesPerView: 1
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          630: {
            slidesPerView: 2,
            spaceBetween: 70
          }
        }
      });
    }
  };

  function catalogSliderDestroy() {
    if (catalogSlider) {
      catalogSlider.destroy();
      catalogSlider = null;
    }
  }

  if (!catalogSlider && document.documentElement.clientWidth <= mediaQuerySize) {
    catalogSliderInit();
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

import { animate } from './helpers';
import Swiper, { Navigation, Pagination, Controller } from 'swiper';

export const modals = (bool = false, e = '') => {
  const body = document.body;
  let slideDocsPopup = null;
  let slideDocsPopup1 = null;
  let scrollWidth = window.outerWidth - body.clientWidth;

  window.addEventListener('resize', () => {
    scrollWidth = window.outerWidth - body.clientWidth;
  });

  const popup = (e, popupClass, popupContent, links) => {
    if ((e.target.closest(`${popupClass} .close`) || e.target === document.querySelector(popupClass))) {
      body.style.paddingRight = `0px`;
      document.querySelector(popupClass).style.visibility = 'hidden';
      document.body.style.overflowY = 'auto';

      if (popupClass === '.popup-repair-types') {
        document.querySelector(popupClass).style.display = 'none';
      }

      if (popupClass === '.popup-transparency' || popupClass === '.popup-portfolio') {
        slideDocsPopup.destroy();
        slideDocsPopup = null;

        if (slideDocsPopup1) {
          slideDocsPopup1.destroy();
          slideDocsPopup1 = null;
        }
      }
    }

    links.forEach(linkClass => {
      if (e.target.classList.contains(linkClass) || e.target.nodeName === linkClass || e.target.closest(`.${linkClass}`)) {
        body.style.paddingRight = `${scrollWidth}px`;
        document.querySelector(popupClass).style.visibility = 'visible';
        document.body.style.overflowY = 'hidden';
        document.querySelector(popupContent).style.opacity = '0';

        if (popupClass === '.popup-repair-types') {
          document.querySelector(popupClass).style.display = 'flex';
        }

        animate({
          duration: 500,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            document.querySelector(popupContent).style.opacity = progress;
          }
        });

        if (popupClass === '.popup-transparency') {
          document.querySelectorAll(`.${linkClass}`).forEach((item, index) => {
            if (e.target === item) {
              slideDocsPopup = new Swiper('.popup-transparency-slider-wrap', {
                speed: 400,
                spaceBetween: 500,

                modules: [Navigation, Pagination],

                direction: 'vertical',
                loop: true,

                pagination: {
                  el: '.swiper-pagination',
                },

                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },

                slidesPerView: 1,
                initialSlide: index,
              });
            }
          });
        }

        if (popupClass === '.popup-portfolio') {
          document.querySelectorAll(`.${linkClass}`).forEach((item, index) => {
            if (e.target === item) {
              slideDocsPopup = new Swiper('.popup-portfolio-slider-wrap', {
                speed: 400,
                loop: true,
                modules: [Navigation, Pagination, Controller],
                pagination: {
                  el: '.swiper-pagination',
                  type: 'fraction',
                  renderFraction: function (currentClass, totalClass) {
                    return `<div class="slider-counter-content">
                                <div class="slider-counter-content__current ${currentClass}"></div>
                                <div class="slider-counter-content__total ${totalClass}"></div>
                              </div>`;
                  },
                },
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
                slidesPerView: 1,
                initialSlide: index >= 10 ? index - 10 : index - 1
              });
              slideDocsPopup1 = new Swiper('.swiper', {
                speed: 400,
                loop: true,
                modules: [Navigation, Pagination, Controller],
                slidesPerView: 1,
                spaceBetween: 30,
                initialSlide: index >= 10 ? index - 10 : index - 1
              });
              slideDocsPopup.controller.control = slideDocsPopup1;
              slideDocsPopup1.controller.control = slideDocsPopup;
            }
          });
        }
      }
    });
  };

  if (bool) {
    return popup(e, '.popup-thank', '.popup-thank-bg', ['FORM']);
  }

  document.addEventListener('click', e => {
    if (e.target.closest('.no-overflow') || e.target.closest('.link-list-repair a') || (e.target.closest(`.popup-repair-types .close`) || e.target === document.querySelector('.popup-repair-types'))) {
      e.preventDefault();

      popup(e, '.popup-repair-types', '.popup-dialog-repair-types', ['no-overflow', 'link-list-repair a']);
    }

    if (e.target.closest('.portfolio-slider__slide-frame') || (e.target.closest(`.popup-portfolio .close`) || e.target === document.querySelector('.popup-portfolio'))) {
      e.preventDefault();

      popup(e, '.popup-portfolio', '.popup-dialog-portfolio', ['portfolio-slider__slide-frame']);
    }

    if (e.target.closest('.link-privacy') || (e.target.closest(`.popup-privacy .close`) || e.target === document.querySelector('.popup-privacy'))) {
      e.preventDefault();

      popup(e, '.popup-privacy', '.popup-dialog-privacy', ['link-privacy']);
    }

    if (e.target.closest('.transparency-item__img') || (e.target.closest(`.popup-transparency .close`) || e.target === document.querySelector('.popup-transparency'))) {
      e.preventDefault();

      popup(e, '.popup-transparency', '.popup-dialog-transparency', ['transparency-item__img']);
    }

    if (e.target.closest('.button_wide') || (e.target.closest(`.popup-consultation .close`) || e.target === document.querySelector('.popup-consultation'))) {
      e.preventDefault();

      popup(e, '.popup-consultation', '.popup-consultation .feedback-wrap', ['button_wide']);
    }

    if (e.target.closest(`.popup-thank .close`) || e.target === document.querySelector('.popup-thank')) {
      e.preventDefault();

      popup(e, '.popup-thank', '.popup-thank-bg', []);
    }
  });
};
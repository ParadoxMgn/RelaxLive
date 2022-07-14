import { animate } from './helpers';
import { sliderDocsPopup } from './slider';
import Swiper, { Navigation, Pagination, Controller } from 'swiper';

export const modals = (bool = false, e = '') => {
  const popupPortfolioSliderWrap = document.querySelector('.popup-portfolio-slider-wrap');
  const portfolioSlider = document.querySelector('.portfolio-slider');
  const sliderCounterContentTotal = popupPortfolioSliderWrap.querySelector('.slider-counter-content__total');
  const popupPortfolioSliderSlide = popupPortfolioSliderWrap.querySelectorAll('.popup-portfolio-slider__slide');
  const sliderCounterContentCurrent = popupPortfolioSliderWrap.querySelector('.slider-counter-content__current');
  const popupPortfolioText = document.querySelectorAll('.popup-portfolio-text');
  let numItem;
  let slideDocsPopup = null;
  let slideDocsPopup1 = null;

  const popup = (e, popupClass, popupContent, links) => {
    if ((e.target.closest(`${popupClass} .close`) || e.target === document.querySelector(popupClass))) {
      document.querySelector(popupClass).style.visibility = 'hidden';
      document.body.style.overflow = 'auto';


      if (popupClass === '.popup-transparency' || popupClass === '.popup-portfolio') {
        slideDocsPopup.destroy();
        if (slideDocsPopup1) {
          slideDocsPopup1.destroy();
        }
      }
    }



    links.forEach(linkClass => {
      if (e.target.classList.contains(linkClass) || e.target.nodeName === linkClass || e.target.closest(`.${linkClass}`)) {
        document.querySelector(popupClass).style.visibility = 'visible';
        document.body.style.overflow = 'hidden';
        document.querySelector(popupContent).style.opacity = '0';

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
    popup(e, '.popup-thank', '.popup-thank-bg', ['FORM']);
  }

  const noOverflow = document.querySelectorAll('.link-list-repair a');

  document.addEventListener('click', e => {
    if (e.target.closest('.no-overflow') || e.target.closest('.link-list-repair a') || (e.target.closest(`.popup-repair-types .close`) || e.target === document.querySelector('.popup-repair-types'))) {
      e.preventDefault();

      popup(e, '.popup-repair-types', '.popup-dialog-repair-types', ['no-overflow', 'link-list-repair a']);
    }

    popup(e, '.popup-portfolio', '.popup-dialog-portfolio', ['portfolio-slider__slide-frame']);
    popup(e, '.popup-privacy', '.popup-dialog-privacy', ['link-privacy']);
    popup(e, '.popup-transparency', '.popup-dialog-transparency', ['transparency-item__img']);
    popup(e, '.popup-consultation', '.popup-consultation .feedback-wrap', ['button_wide']);
    popup(e, '.popup-thank', '.popup-thank-bg', []);
  });
};
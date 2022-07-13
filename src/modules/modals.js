import { animate } from './helpers';
import { sliderDocsPopup } from './slider';
import Swiper, { Navigation, Pagination } from 'swiper';

export const modals = (bool = false, e = '') => {
  const popupPortfolioSliderWrap = document.querySelector('.popup-portfolio-slider-wrap');
  const portfolioSlider = document.querySelector('.portfolio-slider');
  const sliderCounterContentTotal = popupPortfolioSliderWrap.querySelector('.slider-counter-content__total');
  const popupPortfolioSliderSlide = popupPortfolioSliderWrap.querySelectorAll('.popup-portfolio-slider__slide');
  const sliderCounterContentCurrent = popupPortfolioSliderWrap.querySelector('.slider-counter-content__current');
  const popupPortfolioText = document.querySelectorAll('.popup-portfolio-text');
  let numItem;
  let slideDocsPopup;

  const popup = (e, popupClass, popupContent, links) => {
    if ((e.target.closest(`${popupClass} .close`) || e.target === document.querySelector(popupClass))) {
      document.querySelector(popupClass).style.visibility = 'hidden';
      document.body.style.overflow = 'auto';

      if (popupClass === '.popup-transparency') {
        slideDocsPopup.destroy();
      }
    }

    links.forEach(linkClass => {
      if (e.target.closest(linkClass)) {

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
          document.querySelectorAll(linkClass).forEach((item, index) => {
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
      }
    });

    if (popupClass === '.popup-portfolio') {
      const portfolioSliderSlideFrame = portfolioSlider.querySelectorAll('.portfolio-slider__slide-frame');

      portfolioSliderSlideFrame.forEach((item, index) => {
        if (e.target === item) {
          numItem = index;
        }
      });
      popupPortfolioSliderSlide.forEach((item, index) => {
        item.dataset.key = index + 1;

        if (index === numItem) {
          sliderCounterContentTotal.textContent = popupPortfolioSliderSlide.length;
          sliderCounterContentCurrent.textContent = index;
          item.style.display = 'block';
          popupPortfolioText[index].style.display = 'block';
        } else {
          item.style.display = 'none';
          popupPortfolioText[index].style.display = 'none';
        }
      });
    }
  };

  if (bool) {
    popup(e, '.popup-thank', '.popup-thank-bg', ['form']);
  }

  document.addEventListener('click', e => {
    popup(e, '.popup-repair-types', '.popup-dialog-repair-types', ['.no-overflow', '.link-list-repair a']);
    popup(e, '.popup-portfolio', '.popup-dialog-portfolio', ['.portfolio-slider__slide-frame']);
    popup(e, '.popup-privacy', '.popup-dialog-privacy', ['.link-privacy']);
    popup(e, '.popup-transparency', '.popup-dialog-transparency', ['.transparency-item__img']);
    popup(e, '.popup-consultation', '.popup-consultation .feedback-wrap', ['.button_wide']);
    popup(e, '.popup-thank', '.popup-thank-bg', []);
  });
};
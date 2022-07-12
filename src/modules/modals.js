import { animate } from './helpers';

export const modals = (bool = false, e = '') => {
  const popupPortfolioSliderWrap = document.querySelector('.popup-portfolio-slider-wrap');
  const portfolioSlider = document.querySelector('.portfolio-slider');
  const sliderCounterContentTotal = popupPortfolioSliderWrap.querySelector('.slider-counter-content__total');
  const popupPortfolioSliderSlide = popupPortfolioSliderWrap.querySelectorAll('.popup-portfolio-slider__slide');
  const sliderCounterContentCurrent = popupPortfolioSliderWrap.querySelector('.slider-counter-content__current');
  const popupPortfolioText = document.querySelectorAll('.popup-portfolio-text');
  let numItem;

  const popup = (e, popupClass, popupContent, links) => {
    if ((e.target.closest(`${popupClass} .close`) || e.target === document.querySelector(popupClass))) {
      document.querySelector(popupClass).style.visibility = 'hidden';
      document.body.style.overflow = 'auto';
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
    popup(e, '.popup-thank', '.feedback-wrap', ['form']);
  }

  document.addEventListener('click', e => {
    popup(e, '.popup-repair-types', '.popup-dialog-repair-types', ['.no-overflow', '.link-list-repair a']);
    popup(e, '.popup-portfolio', '.popup-dialog-portfolio', ['.portfolio-slider__slide-frame']);
    popup(e, '.popup-privacy', '.popup-dialog-privacy', ['.link-privacy']);
    popup(e, '.popup-consultation', '.feedback-wrap', ['.button_wide']);
    popup(e, '.popup-thank', '.feedback-wrap', []);
  });
};
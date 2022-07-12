import { animate } from './helpers';

export const sliderPortfolio = () => {
  const portfolio = document.querySelector('.portfolio');
  const portfolioSliderSlide = portfolio.querySelectorAll('.portfolio-slider__slide');
  const sliderArrowRightPortfolio = portfolio.querySelector('.slider-arrow_right-portfolio');
  const sliderArrowLeftPortfolio = portfolio.querySelector('.slider-arrow_left-portfolio');
  let count = 0;

  const showIf = (num) => {
    if (count === num) {
      sliderArrowRightPortfolio.style.display = 'none';
    }
    if (count !== num && count !== 0) {
      sliderArrowLeftPortfolio.style.display = 'flex';
      sliderArrowRightPortfolio.style.display = 'flex';
    }
    if (count === 0) {
      sliderArrowLeftPortfolio.style.display = 'none';
    }
  };

  const slider = (slides, direction) => {
    count = direction === 'right' ? --count : ++count;

    if (document.documentElement.clientWidth >= 576 && document.documentElement.clientWidth <= 900) {
      showIf(-4);
    }
    if (document.documentElement.clientWidth >= 901 && document.documentElement.clientWidth <= 1024) {
      showIf(-3);
    }
    if (document.documentElement.clientWidth >= 1025) {
      showIf(-2);
    }
    if (document.documentElement.clientWidth < 576) {
      sliderArrowRightPortfolio.style.display = 'none';
      sliderArrowLeftPortfolio.style.display = 'none';
    }


    slides.forEach(slide => {
      animate({
        duration: 500,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          if (direction === 'right') {
            slide.style.transform = `translateX(${(352 * (count + 1)) + ((352 * count) - (352 * (count + 1))) * progress}px)`;
            console.log(slide.style.transform);
          }
          if (direction === 'left') {
            slide.style.transform = `translateX(${(352 * (count)) + ((352 * (count - 1)) - (352 * (count))) * (1 - progress)}px)`;
          }
        }
      });
    });
  };

  portfolio.addEventListener('click', e => {
    if (e.target.closest('.slider-arrow_right-portfolio')) {
      slider(portfolioSliderSlide, 'right');
    }

    if (e.target.closest('.slider-arrow_left-portfolio')) {
      slider(portfolioSliderSlide, 'left');
    }
  });
};
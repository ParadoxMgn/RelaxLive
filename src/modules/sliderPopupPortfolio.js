export const sliderPopupPortfolio = () => {
  const popupPortfolioSliderWrap = document.querySelector('.popup-portfolio-slider-wrap');
  const popupPortfolioSliderSlide = popupPortfolioSliderWrap.querySelectorAll('.popup-portfolio-slider__slide');
  const sliderCounterContentCurrent = popupPortfolioSliderWrap.querySelector('.slider-counter-content__current');
  const popupPortfolioText = document.querySelectorAll('.popup-portfolio-text');
  let count = 0;

  const arrowSlide = (slides, currentSlide, counter, optionOne, optionTwo) => {
    slides.forEach(item => {
      item.style.display = 'none';
    });

    count += counter;

    if (count === optionOne) {
      count = optionTwo;
      slides[count].style.display = 'block';
      currentSlide.textContent = count + 1;
    } else {
      slides[count].style.display = 'block';
      currentSlide.textContent = count + 1;
    }
  };


  popupPortfolioSliderWrap.addEventListener('click', e => {
    if (e.target.closest('.popup-arrow_right')) {
      arrowSlide(popupPortfolioSliderSlide, sliderCounterContentCurrent, 1, popupPortfolioSliderSlide.length, 0);
      arrowSlide(popupPortfolioText, sliderCounterContentCurrent, 1, popupPortfolioText.length, 0);
    }

    if (e.target.closest('.popup-arrow_left')) {
      arrowSlide(popupPortfolioSliderSlide, sliderCounterContentCurrent, -1, -1, popupPortfolioSliderSlide.length - 1);
      arrowSlide(popupPortfolioText, sliderCounterContentCurrent, -1, -1, popupPortfolioText.length - 1);
    }
  });


};
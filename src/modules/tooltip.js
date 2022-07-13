export const tooltip = () => {
  const formula = document.querySelector('.formula');
  const formulaItem = formula.querySelectorAll('.formula-item');
  const formulaItemIcon = formula.querySelectorAll('.formula-item__icon');
  const formulaItemPopup = formula.querySelectorAll('.formula-item-popup');
  const formulaItemPopupBlock = formula.querySelectorAll('.formula-item-popup__block');
  let formulaSliderSlide = formula.querySelectorAll('.formula-slider__slide');
  const bottom = [];

  formulaItemPopup.forEach(item => {
    const style = getComputedStyle(item);
    bottom.push(style.bottom);
  });

  formula.addEventListener('mouseover', e => {
    formulaSliderSlide = formula.querySelectorAll('.formula-slider__slide');

    formulaItemIcon.forEach((item, index) => {
      if (item === e.target.closest('.formula-item__icon') && !e.target.closest('.formula-item-popup')) {
        const scrollTopElement = formulaItemIcon[index].getBoundingClientRect();
        const style = getComputedStyle(formulaItem[index]);
        formulaItem[index].classList.add('active-item');

        if (scrollTopElement.y < +style.height.slice(0, -2) + 20) {
          formulaItemPopup[index].style.transform = `rotate(180deg)`;
          formulaItemPopupBlock[index].style.transform = `rotate(180deg)`;
          formulaItemPopup[index].style.bottom = `-${+style.height.slice(0, -2) + 70}px`;
          formulaItemPopup[index].style.zIndex = `9999`;
        }
      }
    });

    formulaSliderSlide.forEach(item => {
      if (e.target === item) {
        item.classList.add('active-item');
      }
    });
  });

  formula.addEventListener('mouseout', e => {
    formulaItemIcon.forEach((item, index) => {
      if (item === e.target.closest('.formula-item__icon') && !e.target.closest('.formula-item-popup')) {
        formulaItem[index].classList.remove('active-item');
        formulaItemPopup[index].style.transform = `rotate(0)`;
        formulaItemPopupBlock[index].style.transform = `rotate(0)`;
        formulaItemPopup[index].style.bottom = bottom[index];
      }
    });

    formulaSliderSlide.forEach(item => {
      if (e.target === item) {
        item.classList.remove('active-item');
      }
    });
    formulaSliderSlide = formula.querySelectorAll('.formula-slider__slide');
  });
};
export const tooltip = () => {
  const formula = document.querySelector('.formula');
  const formulaItemIcon = formula.querySelectorAll('.formula-item__icon');
  const formulaItemPopup = formula.querySelectorAll('.formula-item-popup');
  const formulaItemPopupBlock = formula.querySelectorAll('.formula-item-popup__block');

  formula.addEventListener('mouseover', e => {
    formulaItemIcon.forEach((item, index) => {
      if (item === e.target.closest('.formula-item__icon')) {
        const scrollTopElement = formulaItemIcon[index].getBoundingClientRect();
        const height = getComputedStyle(formulaItemPopup[index]);

        console.log(height.height);

        if (scrollTopElement.y > 170) {
          formulaItemPopup[index].style.transform = `rotate(0)`;
          formulaItemPopupBlock[index].style.transform = `rotate(0)`;
          formulaItemPopup[index].style.bottom = `100px`;
          formulaItemPopup[index].style.zIndex = `9999`;
          formulaItemPopup[index].style.visibility = 'visible';
          formulaItemPopup[index].style.opacity = 1;
        } else {
          formulaItemPopup[index].style.transform = `rotate(180deg)`;
          formulaItemPopupBlock[index].style.transform = `rotate(180deg)`;
          formulaItemPopup[index].style.bottom = `-${+height.height.slice(0, -2) + 70}px`;
          formulaItemPopup[index].style.zIndex = `9999`;
          formulaItemPopup[index].style.visibility = 'visible';
          formulaItemPopup[index].style.opacity = 1;
        }
      }
    });
  });

  formula.addEventListener('mouseout', e => {
    formulaItemIcon.forEach((item, index) => {
      if (item === e.target.closest('.formula-item__icon')) {
        formulaItemPopup[index].style.visibility = 'hidden';
        formulaItemPopup[index].style.opacity = 0;
      }
    });
  });
};
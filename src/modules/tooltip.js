export const tooltip = () => {
  const formula = document.querySelector('.formula');
  const formulaItemIcon = formula.querySelectorAll('.formula-item__icon');
  const formulaItemPopup = formula.querySelectorAll('.formula-item-popup');

  formula.addEventListener('mouseover', e => {
    formulaItemIcon.forEach((item, index) => {
      if (item === e.target.closest('.formula-item__icon')) {
        formulaItemPopup[index].style.visibility = 'visible';
        formulaItemPopup[index].style.opacity = 1;
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
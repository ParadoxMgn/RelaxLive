import { animate } from './helpers';

export const modals = () => {
  const popupRepairTypes = document.querySelector('.popup-repair-types');
  const popupDialogRepairTypes = document.querySelector('.popup-dialog-repair-types');

  document.addEventListener('click', e => {
    e.preventDefault();

    if ((e.target.closest('.popup-repair-types>.close') || e.target === popupRepairTypes)) {
      popupRepairTypes.style.visibility = 'hidden';
      document.body.style.overflow = 'auto';
    }

    if (e.target.closest('.no-overflow') || e.target.closest('.link-list-repair>a')) {
      popupRepairTypes.style.visibility = 'visible';
      document.body.style.overflow = 'hidden';
      popupDialogRepairTypes.style.opacity = '0';

      animate({
        duration: 500,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          popupDialogRepairTypes.style.opacity = progress;
        }
      });
    }
  });
};
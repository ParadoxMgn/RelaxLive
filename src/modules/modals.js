export const modals = () => {
  const popupRepairTypes = document.querySelector('.popup-repair-types');

  document.addEventListener('click', e => {
    e.preventDefault();

    if ((e.target.closest('.popup-repair-types>.close') || e.target === popupRepairTypes)) {
      popupRepairTypes.style.visibility = 'hidden';
      document.body.style.overflow = 'auto';
    }

    if (e.target.closest('.no-overflow') || e.target.closest('.link-list-repair>a')) {
      console.log(e.target);
      popupRepairTypes.style.visibility = 'visible';
      document.body.style.overflow = 'hidden';
    }
  });
};
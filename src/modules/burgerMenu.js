export const burgerMenu = () => {
  const dialogMenu = document.querySelector('.popup-dialog-menu');

  document.addEventListener('click', e => {
    if (e.target.closest('.menu__icon')) {
      dialogMenu.style.transform = 'translate3d(0, 0, 0)';
      document.body.style.overflow = 'hidden';
      dialogMenu.dataset.openpopup = '';
    } else {
      if ((e.target.closest('.close-menu') || e.target.closest('.menu-link') || !e.target.closest('.popup-dialog-menu')) && document.documentElement.clientWidth >= 576 && dialogMenu.hasAttribute('data-openpopup')) {
        dialogMenu.style.transform = 'translate3d(645px, 0, 0)';
        document.body.style.overflow = 'auto';
        dialogMenu.removeAttribute('data-openpopup');
      }

      if ((e.target.closest('.close-menu') || e.target.closest('.menu-link') || !e.target.closest('.popup-dialog-menu')) && document.documentElement.clientWidth < 576 && dialogMenu.hasAttribute('data-openpopup')) {
        dialogMenu.style.transform = 'translate3d(0, -100vh, 0)';
        document.body.style.overflow = 'auto';
        dialogMenu.removeAttribute('data-openpopup');
      }
    }
  });

  window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth < 576) {
      dialogMenu.style.transform = 'translate3d(0, -100vh, 0)';
    } else {
      dialogMenu.style.transform = 'translate3d(645px, 0, 0)';
    }
  });
};
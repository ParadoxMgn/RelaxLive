export const burgerMenu = (item) => {
  const dialogMenu = document.querySelector('.popup-dialog-menu');

  if (item.closest('.menu__icon')) {
    dialogMenu.style.transform = 'translate3d(0, 0, 0)';
  }

  if ((item.closest('.close-menu') || item.closest('.menu-link')) && document.documentElement.clientWidth >= 576) {
    dialogMenu.style.transform = 'translate3d(645px, 0, 0)';
  }
  if ((item.closest('.close-menu') || item.closest('.menu-link')) && document.documentElement.clientWidth < 576) {
    dialogMenu.style.transform = 'translate3d(0, -100vh, 0)';
  }

};
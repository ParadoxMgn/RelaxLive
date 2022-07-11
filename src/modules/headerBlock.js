import { phoneList } from './phoneList';
import { burgerMenu } from './burgerMenu';
import { smoothScroll } from './smoothScroll';

export const headerBlock = () => {
  const dialogMenu = document.querySelector('.popup-dialog-menu');

  window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth < 576) {
      dialogMenu.style.transform = 'translate3d(0, -100vh, 0)';
    } else {
      dialogMenu.style.transform = 'translate3d(645px, 0, 0)';
    }
  });

  document.addEventListener('click', e => {
    e.preventDefault();

    if (e.target.closest('.header-contacts__arrow')) {
      phoneList(e.target);
    }

    if (e.target.closest('.menu__icon') || e.target.closest('.close-menu') || e.target.closest('.menu-link')) {
      burgerMenu(e.target);
    }

    if (e.target.closest('.menu-link') || e.target.closest('.button-footer')) {
      smoothScroll(e.target);
    }
  });
};
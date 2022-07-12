import { animate } from './helpers';

export const smoothScroll = () => {
  document.addEventListener('click', e => {
    let scrollTop = document.documentElement.scrollTop;

    if (e.target.closest('.menu-link') && !e.target.closest('.no-overflow')) {
      e.preventDefault();

      const id = e.target.href.slice(e.target.href.lastIndexOf('#') + 1);
      const scrollSection = document.getElementById(id);
      const duration = scrollSection.offsetTop < 3000 ? scrollSection.offsetTop / 4 : scrollSection.offsetTop / 6;

      animate({
        duration: duration,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          document.documentElement.scrollTop = scrollTop + (progress * (scrollSection.offsetTop - scrollTop));
        }
      });
    }
    if (e.target.closest('.button-footer')) {
      e.preventDefault();

      animate({
        duration: 1500,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          document.documentElement.scrollTop = (1 - progress) * scrollTop;
        }
      });
    }
  });
};
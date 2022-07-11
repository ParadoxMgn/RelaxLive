import { animate } from './helpers';

export const smoothScroll = (item) => {
  let scrollTop = document.documentElement.scrollTop;

  if (!item.closest('.no-overflow') && !item.closest('.button-footer')) {
    const id = item.href.slice(item.href.lastIndexOf('#') + 1);
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
  if (item.closest('.button-footer')) {
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
};
import { animate } from './helpers';

export const modals = () => {
  const popup = (e, popupClass, popupContent, links) => {
    if ((e.target.closest(`${popupClass} .close`) || e.target === document.querySelector(popupClass))) {
      document.querySelector(popupClass).style.visibility = 'hidden';
      document.body.style.overflow = 'auto';
    }

    links.forEach((link, index) => {
      if (e.target.closest(link)) {
        console.log(e.target);
        document.querySelector(popupClass).style.visibility = 'visible';
        document.body.style.overflow = 'hidden';
        document.querySelector(popupContent).style.opacity = '0';
        document.querySelector(popupContent).dataset.key = index + 1;

        animate({
          duration: 500,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            document.querySelector(popupContent).style.opacity = progress;
          }
        });
      }
    });
  };

  document.addEventListener('click', e => {
    popup(e, '.popup-repair-types', '.popup-dialog-repair-types', ['.no-overflow', '.link-list-repair a']);
    popup(e, '.popup-portfolio', '.popup-dialog-portfolio', ['.portfolio-slider__slide-frame']);
    popup(e, '.popup-privacy', '.popup-dialog-privacy', ['.link-privacy']);

  });
};
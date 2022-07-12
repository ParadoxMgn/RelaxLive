export const debounce = (func, ms = 300) => {
  let id;

  return (...arg) => {
    clearTimeout(id);
    id = setTimeout(() => { func.apply(this, arg); }, ms);
  };
};

export const animate = ({ timing, draw, duration }) => {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) {
      timeFraction = 1;
    }

    let progress = timing(timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};

/*================================================
  import { animate } from './helpers';
  ------------------------------------------------
  animate({
  duration: 1000,
  timing(timeFraction) {
    return timeFraction;
  },
  draw(progress) {
    elem.style.width = progress * 100 + '%';
  }
});
==================================================*/
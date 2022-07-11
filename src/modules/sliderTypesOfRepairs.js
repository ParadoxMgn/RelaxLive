export const sliderTypesOfRepairs = () => {
  const repairTypes = document.querySelector('.repair-types');
  const repairTypesNavItem = document.querySelectorAll('.repair-types-nav__item');
  const typesRepair = document.querySelectorAll('.types-repair');
  const sliderCounterContentCurrent = document.querySelector('.slider-counter-content__current');
  const sliderCounterContentTotal = document.querySelector('.slider-counter-content__total');
  let repairTypesSliderSlide;
  let count = 0;

  const itemSlide = (item) => {
    if (item.hasAttribute('data-key')) {
      repairTypesSliderSlide = item.querySelectorAll('.repair-types-slider__slide');

      sliderCounterContentTotal.textContent = repairTypesSliderSlide.length;
      repairTypesSliderSlide.forEach((item, index) => {
        if (index) {
          item.style.display = 'none';
        } else {
          item.style.display = 'block';
        }
      });
    }
  };

  typesRepair.forEach((item, index) => {
    if (index) {
      item.style.display = 'none';
    } else {
      item.style.display = 'block';
      item.dataset.key = '';
    }

    itemSlide(item);
  });

  repairTypes.addEventListener('click', e => {
    e.preventDefault();

    repairTypesNavItem.forEach((item, index) => {
      if (e.target.closest('.repair-types-nav__item')) {
        item.classList.remove('active');
        typesRepair[index].removeAttribute('data-key');
        typesRepair[index].style.display = 'none';
        if (e.target === item) {
          item.classList.add('active');
          typesRepair[index].dataset.key = '';
          typesRepair[index].style.display = 'block';
          count = 0;
          sliderCounterContentCurrent.textContent = count + 1;
        }
      }
    });

    typesRepair.forEach(item => itemSlide(item));

    if (e.target.closest('.slider-arrow_right')) {
      repairTypesSliderSlide.forEach(item => {
        item.style.display = 'none';
      });

      count++;

      if (count < repairTypesSliderSlide.length) {
        repairTypesSliderSlide[count].style.display = 'block';
        sliderCounterContentCurrent.textContent = count + 1;
      } else {
        count = 0;
        repairTypesSliderSlide[count].style.display = 'block';
        sliderCounterContentCurrent.textContent = count + 1;
      }
    }


    if (e.target.closest('.slider-arrow_left')) {
      repairTypesSliderSlide.forEach(item => {
        item.style.display = 'none';
      });

      count--;

      if (count >= 0) {
        repairTypesSliderSlide[count].style.display = 'block';
        sliderCounterContentCurrent.textContent = count + 1;
      } else {
        count = repairTypesSliderSlide.length - 1;
        repairTypesSliderSlide[count].style.display = 'block';
        sliderCounterContentCurrent.textContent = count + 1;
      }
    }
  });
};
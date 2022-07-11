export const sliderTypesOfRepairs = () => {
  const repairTypes = document.querySelector('.repair-types');
  const navListRepair = repairTypes.querySelector('.nav-list-repair');
  const repairTypesNavItem = document.querySelectorAll('.repair-types-nav__item');
  const typesRepair = document.querySelectorAll('.types-repair');
  const sliderCounterContentCurrent = document.querySelector('.slider-counter-content__current');
  const sliderCounterContentTotal = document.querySelector('.slider-counter-content__total');
  let repairTypesSliderSlide;
  let transform = 0;
  let count = 0;
  let countTabs = 0;

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

  // if (document.documentElement.clientWidth <= 1024) {
  //   navListRepair.style.transform = `translateX(${transform}px)`;
  // }


  repairTypes.addEventListener('click', e => {
    e.preventDefault();

    if (document.documentElement.clientWidth > 1024) {
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
    } else {
      if (e.target.closest('.nav-arrow_right')) {
        repairTypesNavItem.forEach((item, index) => {
          item.classList.remove('active');
          typesRepair[index].removeAttribute('data-key');
          typesRepair[index].style.display = 'none';
        });

        count = 0;
        countTabs++;

        if (countTabs < repairTypesNavItem.length) {
          let styles = getComputedStyle(repairTypesNavItem[countTabs - 1]);
          repairTypesNavItem[countTabs].classList.add('active');
          typesRepair[countTabs].dataset.key = '';
          typesRepair[countTabs].style.display = 'block';
          sliderCounterContentCurrent.textContent = 1;
          transform -= +styles.width.slice(0, -2) + 12;
          navListRepair.style.transform = `translateX(${transform}px)`;
          console.log(transform);
        } else {
          countTabs = 0;
          repairTypesNavItem[countTabs].classList.add('active');
          typesRepair[countTabs].dataset.key = '';
          typesRepair[countTabs].style.display = 'block';
          repairTypesSliderSlide[countTabs].style.display = 'block';
          sliderCounterContentCurrent.textContent = 1;
          transform = 0;
          navListRepair.style.transform = `translateX(${transform}px)`;
        }
      }

      if (e.target.closest('.nav-arrow_left')) {
        repairTypesNavItem.forEach((item, index) => {
          item.classList.remove('active');
          typesRepair[index].removeAttribute('data-key');
          typesRepair[index].style.display = 'none';
        });

        count = 0;
        countTabs--;

        if (countTabs >= 0) {
          let styles = getComputedStyle(repairTypesNavItem[countTabs]);
          repairTypesNavItem[countTabs].classList.add('active');
          typesRepair[countTabs].dataset.key = '';
          typesRepair[countTabs].style.display = 'block';
          sliderCounterContentCurrent.textContent = 1;
          transform += +styles.width.slice(0, -2) + 12;
          navListRepair.style.transform = `translateX(${transform}px)`;
        } else {
          countTabs = repairTypesNavItem.length - 1;
          repairTypesNavItem[countTabs].classList.add('active');
          typesRepair[countTabs].dataset.key = '';
          typesRepair[countTabs].style.display = 'block';
          repairTypesSliderSlide[countTabs].style.display = 'block';
          sliderCounterContentCurrent.textContent = 1;
          transform = -839;
          navListRepair.style.transform = `translateX(${transform}px)`;
        }
      }
    }


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
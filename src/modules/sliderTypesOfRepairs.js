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
  let prev = 0;
  let current = 0;

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

  const arrowSlide = (slides, currentSlide, num, optionOne, optionTwo) => {
    slides.forEach(item => {
      item.style.display = 'none';
    });

    count += num;

    if (count === optionOne) {
      count = optionTwo;
      slides[count].style.display = 'block';
      currentSlide.textContent = count + 1;
    } else {
      slides[count].style.display = 'block';
      currentSlide.textContent = count + 1;
    }
  };

  const moveTabs = (block, num, item, target) => {
    let styles = getComputedStyle(block);
    if (target.classList.contains('repair-types-nav__item-1')) {
      transform = 0;
      item.style.transform = `translateX(${transform}px)`;
    }
    if (target.classList.contains('repair-types-nav__item-5')) {
      transform = -839;
      item.style.transform = `translateX(${transform}px)`;
    }
    if (!target.classList.contains('repair-types-nav__item-1') && !target.classList.contains('repair-types-nav__item-5')) {
      transform += (+styles.width.slice(0, -2) + 12) * num;
      item.style.transform = `translateX(${transform}px)`;
    }
  };

  const arrowSlideTabs = (num, optionOne, optionTwo, trans, mult, diff) => {
    repairTypesNavItem.forEach((item, index) => {
      item.classList.remove('active');
      typesRepair[index].removeAttribute('data-key');
      typesRepair[index].style.display = 'none';
    });

    countTabs += num;

    if (countTabs === optionOne) {
      countTabs = optionTwo;
      typesRepair[countTabs].style.display = 'block';
      transform = trans;
    } else {
      let styles = getComputedStyle(repairTypesNavItem[countTabs + diff]);
      transform += (+styles.width.slice(0, -2) + 12) * mult;
    }

    if (countTabs === 0) {
      transform = 0;
    }

    if (countTabs === 5) {
      transform = -839;
    }

    navListRepair.style.transform = `translateX(${transform}px)`;
    repairTypesNavItem[countTabs].classList.add('active');
    typesRepair[countTabs].dataset.key = '';
    typesRepair[countTabs].style.display = 'block';
    sliderCounterContentCurrent.textContent = 1;
    count = 0;
    prev = current;
    current = countTabs;
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


    if (e.target.closest('.repair-types-nav__item')) {
      repairTypesNavItem.forEach((item, index) => {
        item.classList.remove('active');
        typesRepair[index].removeAttribute('data-key');
        typesRepair[index].style.display = 'none';
        if (e.target === item) {
          item.classList.add('active');
          typesRepair[index].dataset.key = '';
          typesRepair[index].style.display = 'block';
          count = 0;
          countTabs = index;
          prev = current;
          current = index;

          if (document.documentElement.clientWidth <= 1024 && current > prev) {
            moveTabs(repairTypesNavItem[countTabs - 1], -1, navListRepair, e.target);
          }
          if (document.documentElement.clientWidth <= 1024 && current < prev) {
            moveTabs(repairTypesNavItem[countTabs], 1, navListRepair, e.target);
          }
        }
      });

      sliderCounterContentCurrent.textContent = 1;
    }

    if (document.documentElement.clientWidth <= 1024) {
      if (e.target.closest('.nav-arrow_right')) {
        arrowSlideTabs(1, repairTypesNavItem.length, 0, 0, -1, -1);
      }

      if (e.target.closest('.nav-arrow_left')) {
        arrowSlideTabs(-1, -1, repairTypesNavItem.length - 1, -839, 1, 0);
      }
    }

    typesRepair.forEach(item => itemSlide(item));

    if (e.target.closest('.slider-arrow_right')) {
      arrowSlide(repairTypesSliderSlide, sliderCounterContentCurrent, 1, repairTypesSliderSlide.length, 0);
    }


    if (e.target.closest('.slider-arrow_left')) {
      arrowSlide(repairTypesSliderSlide, sliderCounterContentCurrent, -1, -1, repairTypesSliderSlide.length - 1);
    }
  });
};
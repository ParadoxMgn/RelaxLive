export const render = (data) => {
  let navListPopupRepair = document.querySelector('.nav-list-popup-repair');
  const popupRepairTypesContentTableList = document.querySelector('.popup-repair-types-content-table__list');
  const tBody = popupRepairTypesContentTableList.querySelector('tbody');
  const title = document.querySelector('.popup-repair-types-content__head-title');
  let popupRepairTypesNavItem = document.querySelectorAll('.popup-repair-types-nav__item');

  // <button class="button_o popup-repair-types-nav__item swiper-slide active">Потолок: Демонтажные работы</button>

  const renderButtons = (data) => {
    let buttonsArr = [];

    data.forEach(item => {
      if (item.type) {
        buttonsArr.push(item.type);
      }
    });

    buttonsArr = buttonsArr.filter((item, index) => {
      return buttonsArr.indexOf(item.trim()) === index;
    });

    navListPopupRepair.innerHTML = ``;

    buttonsArr.forEach((item, index) => {
      navListPopupRepair.insertAdjacentHTML('beforeend',
        `<button class="button_o popup-repair-types-nav__item swiper-slide ${index ? '' : 'active'}">${item}</button>`
      );
    });
  };

  const renderTable = (data, text = 'Потолок: Демонтажные работы') => {
    tBody.innerHTML = '';
    title.textContent = text;

    data.forEach(item => {
      if (item.type.trim() === text.trim()) {
        tBody.insertAdjacentHTML('beforeend',
          `<tr class="mobile-row">
             <td class="repair-types-name">${item.name}</td>
             <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
             <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
             <td class="repair-types-value">${item.units === 'м2' ? item.units[0] + '<sup>' + item.units[1] : item.units}</td >
             <td class="repair-types-value">${item.cost} руб.</td>
           </tr > `);
      }
    });
  };

  renderTable(data);
  renderButtons(data);

  popupRepairTypesNavItem = document.querySelectorAll('.popup-repair-types-nav__item');

  navListPopupRepair.addEventListener('click', e => {
    e.preventDefault();

    popupRepairTypesNavItem.forEach((item, index) => {
      item.classList.remove('active');

      if (e.target === item) {
        renderTable(data, e.target.textContent);

        e.target.classList.add('active');
      }
    });
  });
};
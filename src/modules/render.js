export const render = (data) => {
  const navListPopupRepair = document.querySelector('.nav-list-popup-repair');
  const popupRepairTypesContentTableList = document.querySelector('.popup-repair-types-content-table__list');
  const tBody = popupRepairTypesContentTableList.querySelector('tbody');
  const title = document.querySelector('.popup-repair-types-content__head-title');

  const renderTable = (data, text = 'Потолок: Демонтажные работы') => {
    tBody.innerHTML = '';
    title.textContent = text;

    data.forEach(item => {
      if (item.type === text) {
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

  navListPopupRepair.addEventListener('click', e => {
    e.preventDefault();

    renderTable(data, e.target.textContent);
  });
};
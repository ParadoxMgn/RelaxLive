export const render = (data) => {
  const tableBody = document.getElementById('tbody');

  tableBody.innerHTML = '';

  data.forEach(itemData => {
    tableBody.insertAdjacentHTML('beforeend',
      `<tr class="table__row" data-key="${itemData.id}">
        <td class="table__id table__cell">${itemData.id}</td>
        <td class="table-type table__cell">${itemData.type}</td>
        <td class="table-name table__cell">
          ${itemData.name}
        </td>
        <td class="table-units table__cell">
          ${itemData.units === 'м2' ? itemData.units[0] + '<sup>' + itemData.units[1] : itemData.units}
        </td>
        <td class="table-cost table__cell">
          ${itemData.cost} руб
        </td>
        <td>
          <div class="table__actions table__cell">
            <button class="button action-change"><span class="svg_ui"><svg class="action-icon_change">
                  <use xlink:href="./img/sprite.svg#change"></use>
                </svg></span><span>Изменить</span>
            </button>
            <button class="button action-remove"><span class="svg_ui"><svg class="action-icon_remove">
                 <use xlink:href="./img/sprite.svg#remove"></use>
               </svg></span><span>Удалить</span>
            </button>
          </div>
        </td>
      </tr>`);
  });
};

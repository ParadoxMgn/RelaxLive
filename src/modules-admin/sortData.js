import { render } from "./render";

export const sortData = () => {
  const tHead = document.querySelector('.table thead');
  const select = document.getElementById(`typeItem`);
  const searchInput = document.getElementById('input-search');

  tHead.addEventListener('click', e => {
    const tableTh = e.target.closest('.table-th');
    const svgUi = tableTh.querySelector('.svg_ui');

    if (!tableTh.hasAttribute('data-sort')) {
      if (tableTh.classList.contains('th-id')) {
        tableTh.dataset.sorting = 'id';
        tableTh.dataset.sort = '';
      }
      if (tableTh.classList.contains('th-type')) {
        tableTh.dataset.sorting = 'type';
        tableTh.dataset.sort = '';
      }
      if (tableTh.classList.contains('th-name')) {
        tableTh.dataset.sorting = 'name';
        tableTh.dataset.sort = '';
      }
      if (tableTh.classList.contains('th-units')) {
        tableTh.dataset.sorting = 'units';
        tableTh.dataset.sort = '';
      }
      if (svgUi) {
        svgUi.style.transform = `rotate(180deg)`;
      }
    } else {
      tableTh.removeAttribute('data-sort');
      svgUi.style.transform = `rotate(0)`;
    }

    if (searchInput.value !== '') {
      console.log(1);
      dbService.dataGet(`?_sort=${tableTh.dataset.sorting}&_order=${tableTh.hasAttribute('data-sort') ? 'asc' : 'desc'}&q=${searchInput.value}`)
        .then(data => render(data));
    } else {
      if (select.value !== 'Все услуги') {
        dbService.dataGet(`?_sort=${tableTh.dataset.sorting}&_order=${tableTh.hasAttribute('data-sort') ? 'asc' : 'desc'}&type=${select.value}`)
          .then(data => render(data));
      } else {
        dbService.dataGet(`?_sort=${tableTh.dataset.sorting}&_order=${tableTh.hasAttribute('data-sort') ? 'asc' : 'desc'}`)
          .then(data => render(data));
      }
    }
  });
};
import { renderFilter } from "./filterData";

export const sortData = () => {
  const tHead = document.querySelector('.table thead');
  const th = document.querySelectorAll('.table-th');

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

    th.forEach(item => {
      if (e.target.closest('.table-th') !== item) {
        const svgUi = item.querySelector('.svg_ui');
        item.removeAttribute('data-sort');
        item.removeAttribute('data-sorting');
        if (svgUi) {
          svgUi.style.transform = `rotate(0)`;
        }
      }
    });

    renderFilter();
  });
};
import { render } from "./render";

export const filterData = () => {
  const searchInput = document.getElementById('input-search');
  const select = document.getElementById(`typeItem`);
  const th = document.querySelectorAll('.table-th');

  select.addEventListener('input', e => {
    renderFilter();

    th.forEach(item => {
      const svgUi = item.querySelector('.svg_ui');
      item.removeAttribute('data-sort');
      item.removeAttribute('data-sorting');
      if (svgUi) {
        svgUi.style.transform = `rotate(0)`;
      }
    });

    searchInput.value = '';
  });
};

export const renderFilter = () => {
  const select = document.getElementById(`typeItem`);

  if (select.value === 'Все услуги') {
    dbService.dataGet()
      .then(data => render(data));
  } else {
    dbService.dataGet(`?type=${select.value}`)
      .then(data => render(data));
  }
};
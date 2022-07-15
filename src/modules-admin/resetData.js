import { render } from "./render";

export const resetData = () => {
  const btnReset = document.querySelector('.btn-reset');
  const searchInput = document.getElementById('input-search');
  const select = document.getElementById(`typeItem`);
  const th = document.querySelectorAll('.table-th');

  btnReset.addEventListener('click', e => {
    e.preventDefault();

    th.forEach(item => {
      const svgUi = item.querySelector('.svg_ui');
      item.removeAttribute('data-sort');
      item.removeAttribute('data-sorting');
      if (svgUi) {
        svgUi.style.transform = `rotate(0)`;
      }
    });

    dbService.dataGet()
      .then(data => render(data));
    select.value = 'Все услуги';
    searchInput.value = '';
  });
};
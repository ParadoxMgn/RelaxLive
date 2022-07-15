import { debounce } from '../modules/helpers';
import { render } from './render';

export const searchData = () => {
  const select = document.getElementById(`typeItem`);
  const searchInput = document.getElementById('input-search');
  const th = document.querySelectorAll('.table-th');

  const debounceSearch = debounce(() => {
    dbService.dataGet(`?q=${searchInput.value}`)
      .then(data => render(data));

    th.forEach(item => {
      const svgUi = item.querySelector('.svg_ui');
      item.removeAttribute('data-sort');
      item.removeAttribute('data-sorting');
      if (svgUi) {
        svgUi.style.transform = `rotate(0)`;
      }
    });

    select.value = 'Все услуги';
  }, 400);

  searchInput.addEventListener('input', debounceSearch);
};
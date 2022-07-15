import { debounce } from '../modules/helpers';
import { renderFilter } from "./filterData";

export const searchData = () => {
  const select = document.getElementById(`typeItem`);
  const searchInput = document.getElementById('input-search');

  const debounceSearch = debounce(() => {
    renderFilter();
    select.value = 'Все услуги';
  }, 400);

  searchInput.addEventListener('input', debounceSearch);
};
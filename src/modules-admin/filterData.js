import { render } from "./render";

export const filterData = () => {
  const select = document.getElementById(`typeItem`);

  select.addEventListener('input', e => {
    if (e.target.value === 'Все услуги') {
      dbService.filterData(``)
        .then(data => render(data));
    } else {
      dbService.filterData(`?type=${e.target.value}`)
        .then(data => render(data));
    }
  });
};
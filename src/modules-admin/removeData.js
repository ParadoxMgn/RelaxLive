import { renderFilter } from "./filterData";
import { select } from "./select";

export const removeData = () => {
  const tableBody = document.getElementById('tbody');


  tableBody.addEventListener('click', e => {
    if (e.target.closest('.action-remove')) {
      e.preventDefault();

      const tr = e.target.closest('tr');

      dbService.dataSend("DELETE", [], `/${tr.dataset.key}`).then(() => {
        renderFilter();
      });

      dbService.dataGet()
        .then(data => {
          select(data);
        });
    }
  });
};
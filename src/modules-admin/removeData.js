import { renderFilter } from "./filterData";
import { select } from "./select";

export const removeData = () => {
  const tableBody = document.getElementById('tbody');
  const selectInput = document.getElementById(`typeItem`);


  tableBody.addEventListener('click', async e => {
    if (e.target.closest('.action-remove')) {
      e.preventDefault();

      const tr = e.target.closest('tr');

      await dbService.dataSend("DELETE", [], `/${tr.dataset.key}`).then(() => {
        renderFilter();
      });

      await dbService.dataGet()
        .then(data => {
          select(data, selectInput.value);
        });
    }
  });
};
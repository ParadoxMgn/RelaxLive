import { renderFilter } from "./filterData";
import { select } from "./select";

export const editData = () => {
  const modal = document.getElementById('modal');
  const tableBody = document.getElementById('tbody');
  const form = document.querySelector('.modal form');
  const inputType = document.getElementById('type');
  const inputName = document.getElementById('name');
  const inputUnits = document.getElementById('units');
  const searchCost = document.getElementById('cost');

  tableBody.addEventListener('click', e => {
    if (e.target.closest('.action-change')) {
      const tr = e.target.closest('tr');

      dbService.dataGet(`/${tr.dataset.key}`).then(data => {
        inputType.value = data.type;
        inputName.value = data.name;
        inputUnits.value = data.units;
        searchCost.value = data.cost;
        form.dataset.edit = `${tr.dataset.key}`;
      });
    }
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    if (form.dataset.edit) {
      const data = {
        "type": `${inputType.value}`,
        "name": `${inputName.value}`,
        "units": `${inputUnits.value}`,
        "cost": `${+searchCost.value}`
      };

      dbService.dataSend("PATCH", data, `/${form.dataset.edit}`).then(() => {
        renderFilter();
      });

      dbService.dataGet()
        .then(data => {
          select(data);
        });

      form.reset();
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
};
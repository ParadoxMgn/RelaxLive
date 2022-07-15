import { renderFilter } from "./filterData";
import { select } from "./select";

export const addData = () => {
  const selectInput = document.getElementById(`typeItem`);
  const modal = document.getElementById('modal');
  const form = document.querySelector('.modal form');
  const inputType = document.getElementById('type');
  const inputName = document.getElementById('name');
  const inputUnits = document.getElementById('units');
  const searchCost = document.getElementById('cost');

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const data = {
      "type": `${inputType.value}`,
      "name": `${inputName.value}`,
      "units": `${inputUnits.value}`,
      "cost": `${+searchCost.value}`
    };

    if (!form.dataset.edit) {
      await dbService.dataSend("POST", data).then(() => {
        renderFilter();
      });

      await dbService.dataGet()
        .then(data => {
          select(data, selectInput.value);
        });

      form.reset();
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
};
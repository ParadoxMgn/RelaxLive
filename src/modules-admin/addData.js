import { renderFilter } from "./filterData";

export const addData = () => {
  const modal = document.getElementById('modal');
  const form = document.querySelector('.modal form');
  const inputType = document.getElementById('type');
  const inputName = document.getElementById('name');
  const inputUnits = document.getElementById('units');
  const searchCost = document.getElementById('cost');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const data = {
      "type": `${inputType.value}`,
      "name": `${inputName.value}`,
      "units": `${inputUnits.value}`,
      "cost": `${+searchCost.value}`
    };

    if (!form.dataset.edit) {
      dbService.dataSend("POST", data).then(() => {
        renderFilter();
      });

      form.reset();
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
};
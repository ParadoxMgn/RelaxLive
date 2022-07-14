import { render } from "./render";
import { error } from "./error";
import { select } from "./select";

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

    dbService.addData(data).then(() => {
      dbService.dataGet()
        .then(data => render(data))
        .catch(() => error());
    });

    form.reset();
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
};
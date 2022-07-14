import { render } from './render';

export const getData = () => {
  fetch('./db/db.json')
    .then(response => response.json())
    .then(data => render(data.db))
    .catch(err => console.log(err));
};
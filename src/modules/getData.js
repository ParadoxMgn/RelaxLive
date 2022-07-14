import { render } from './render';

export const getData = () => {
  return fetch('./db/db.json')
    .then(response => response.json())
    .then(data => render(data.data))
    .catch(err => console.log(err));
};
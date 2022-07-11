import { phoneList } from './phoneList';

export const headerBlock = () => {
  const header = document.querySelector('.header');


  header.addEventListener('click', e => {
    phoneList(e.target);
  });
};
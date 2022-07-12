import { animate } from './helpers';

export const accordion = () => {
  const accordionBlock = document.querySelector('.accordion');
  const li = accordionBlock.querySelectorAll('li');
  const h2 = accordionBlock.querySelectorAll('h2');


  accordionBlock.addEventListener('click', e => {
    li.forEach((item, index) => {
      if (e.target.closest('.accordion li') === item) {
        h2[index].classList.toggle('msg-active');
      } else {
        h2[index].classList.remove('msg-active');
      }
    });
  });
};
import { validateForm } from './validateForm';
import { modals } from './modals';

export const sendForm = () => {
  const form = document.querySelectorAll('form');

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/todos/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(response => response.json());
  };

  const getForm = (form) => {
    const inputs = form.querySelectorAll('input');
    const btn = form.querySelector('button');
    const checkboxInput = form.querySelector('.checkbox__input');
    const checkbox = form.querySelector('.checkbox');
    const checkboxLabel = form.querySelector('.checkbox__label');


    checkboxInput.removeAttribute('required');

    const submitForm = (form, e) => {
      const formData = new FormData(form);
      const formBody = {};

      formData.forEach((val, key) => {
        if (val) {
          formBody[key] = val;
        }
      });
      if (validateForm(inputs, form)) {
        if (checkboxInput.checked) {
          sendData({ formBody })
            .then(() => {
              form.reset();
              document.querySelector('.popup-consultation').style.visibility = 'hidden';
              document.body.style.overflow = 'auto';
              modals(true, e);
            })
            .catch(err => {
              alert(err);
            });
        } else {
          checkbox.style.borderBottom = '2px solid red';
          checkboxLabel.style.border = '2px solid red';
        }
      }
    };

    try {
      if (!form) {
        throw new Error('Форма не найдена!');
      }

      form.addEventListener('click', e => {
        if (e.target == btn) {
          validateForm(inputs, form);
        }

        if (e.target.closest('.checkbox__input')) {
          checkboxInput.checked = checkboxInput.checked ? true : false;
          checkboxLabel.style.border = '1px solid #322823';
          checkbox.style.borderBottom = 'none';
        }

      });

      form.addEventListener('submit', e => {
        e.preventDefault();

        submitForm(form, e);
      });
    } catch (error) {
      alert(error.message);
    }
  };

  form.forEach(item => {
    getForm(item);
  });
};
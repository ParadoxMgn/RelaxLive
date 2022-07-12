import { validateForm } from './validateForm';

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
    const checkBox = form.querySelector('.checkbox__input');

    checkBox.removeAttribute('required');

    const submitForm = (form) => {
      const formData = new FormData(form);
      const formBody = {};

      formData.forEach((val, key) => {
        if (val) {
          formBody[key] = val;
        }
      });
      if (validateForm(inputs)) {
        if (checkBox.checked) {
          sendData({ formBody })
            .then(data => {
              form.reset();
            })
            .catch(err => {
              alert(err);
            });
        } else {
          alert('Нужно согласиться с политикой конфиденциальности');
        }
      }
    };

    try {
      if (!form) {
        throw new Error('Форма не найдена!');
      }

      form.addEventListener('click', e => {
        if (e.target == btn) {
          validateForm(inputs);
        }

        if (e.target.closest('.checkbox__input')) {
          checkBox.checked = checkBox.checked ? true : false;
        }

      });

      form.addEventListener('submit', e => {
        e.preventDefault();

        submitForm(form);
      });
    } catch (error) {
      alert(error.message);
    }
  };

  form.forEach(item => {
    getForm(item);
  });
};
export const validateForm = (inputs, form) => {
  let success = true;
  const formSpan = form.querySelectorAll('span');

  const checkPhone = (elem) => {
    let count = 0;
    let len = 0;
    let arr = [];

    arr = elem.value.split('');
    arr.forEach((item, index) => {
      if (/[0-9]/.test(item)) {
        count++;
      }

      if (count <= 13) {
        len = index + 1;
      }
    });

    elem.value = arr.join('').slice(0, len);
    if (count < 11) {
      return true;
    } else {
      return false;
    }
  };

  inputs.forEach((item, index) => {
    console.log(item);
    if (item.value.trim() === '') {

      item.setCustomValidity('Поле не должно быть пустым!');
    }

    if (item.type === "tel" && item.value.trim() !== '' && checkPhone(item)) {

      item.setCustomValidity('Номер телефона должен быть не меньше 11 цифр!');
    }

    item.addEventListener('invalid', () => {
      if (form.classList.contains('feedback__form')) {
        item.classList.add('error-input');
      }

      if (form.classList.contains('feedback-block__form')) {
        formSpan[index].style.color = 'red';
      }
    });

    if (item.type !== "checkbox" && !item.checkValidity()) {
      success = false;
    }

    item.addEventListener('input', e => {
      inputs.forEach(item => {
        if (e.target === item && e.target.type !== "checkbox") {
          item.setCustomValidity('');
          item.classList.remove('error-input');
          if (form.classList.contains('feedback-block__form')) {
            formSpan[index].style.color = 'white';
          }
        }
      });
    });
  });

  return success;
};
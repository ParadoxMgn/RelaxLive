export const auth = async (dataUser) => {
  const form = document.querySelector('form');
  const nameInput = document.getElementById('name');
  const passwordInput = document.getElementById('type');
  const textWarningName = document.querySelector('.text-warning-name');
  const textWarningPass = document.querySelector('.text-warning-pass');

  const indexPath = window.location.href.slice(0, window.location.href.lastIndexOf('/'));
  const table = indexPath + '/table.html';
  const { name, password } = dataUser;

  form.addEventListener('submit', e => {
    e.preventDefault();
    let checkName = true;
    let checkPass = true;

    if (nameInput.value.trim() != '' && nameInput.value.trim() !== name) {
      checkName = false;
      textWarningName.style.display = 'block';
      nameInput.value = '';
      passwordInput.value = '';
    }

    if (passwordInput.value.trim() != '' && passwordInput.value.trim() !== password && checkName) {
      checkPass = false;
      textWarningPass.style.display = 'block';
      passwordInput.value = '';
    }

    if (checkName && checkPass) {
      document.cookie = "user=auth; path=/admin";
      window.location.href = table;
    }
  });

  document.querySelectorAll('input').forEach(item => {
    item.addEventListener('focus', e => {
      if (item === nameInput) {
        textWarningName.style.display = 'none';
      }
      if (item === passwordInput) {
        textWarningPass.style.display = 'none';
      }
    });
  });
};
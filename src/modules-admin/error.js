export const error = () => {
  const table = document.querySelector('table');
  return table.insertAdjacentHTML('afterend', '<p style="width:400px;margin: 0 auto;">Произошла ошибка, данных нет!</p>');
};
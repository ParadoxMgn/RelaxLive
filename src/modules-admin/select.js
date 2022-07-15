export const select = (data) => {
  const select = document.getElementById(`typeItem`);
  let selectArr = [];

  data.forEach(item => {
    if (item.type) {
      selectArr.push(item.type);
    }
  });

  selectArr = selectArr.filter((item, index) => {
    return selectArr.indexOf(item.trim()) === index;
  });

  select.innerHTML = `<option value="Все услуги">Все услуги</option>`;

  selectArr.forEach(item => {
    select.insertAdjacentHTML('beforeend',
      `<option value="${item}">${item}</option>`
    );
  });
};
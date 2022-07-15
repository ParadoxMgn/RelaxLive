import { render } from "./render";

export const filterData = () => {
  const searchInput = document.getElementById('input-search');
  const select = document.getElementById(`typeItem`);

  select.addEventListener('input', e => {
    searchInput.value = '';
    renderFilter();
  });
};

export const renderFilter = () => {
  const select = document.getElementById(`typeItem`);
  const searchInput = document.getElementById('input-search');
  const th = document.querySelectorAll('.table-th');
  let sort = '';
  let nameSort = '';

  th.forEach(item => {
    if (item.hasAttribute('data-sorting') && item.hasAttribute('data-sort')) {
      sort = 'asc';
      nameSort = item.dataset.sorting;
    }

    if (item.hasAttribute('data-sorting') && !item.hasAttribute('data-sort')) {
      sort = 'desc';
      nameSort = item.dataset.sorting;
    }
  });

  if (select.value === 'Все услуги' && searchInput.value === '' && sort === '') {
    dbService.dataGet()
      .then(data => render(data));
  }
  if (select.value !== 'Все услуги' && searchInput.value === '' && sort === '') {
    dbService.dataGet(`?type=${select.value}`)
      .then(data => render(data));
  }
  if (searchInput.value !== '' && sort === '') {
    dbService.dataGet(`?q=${searchInput.value}`)
      .then(data => render(data));
  }
  if (select.value === 'Все услуги' && searchInput.value === '' && sort !== '') {
    dbService.dataGet(`?_sort=${nameSort}&_order=${sort}`)
      .then(data => render(data));
  }
  if (select.value !== 'Все услуги' && searchInput.value === '' && sort !== '') {
    dbService.dataGet(`?_sort=${nameSort}&_order=${sort}&type=${select.value}`)
      .then(data => render(data));
  }
  if (searchInput.value !== '' && sort !== '') {
    dbService.dataGet(`?_sort=${nameSort}&_order=${sort}&q=${searchInput.value}`)
      .then(data => render(data));
  }
};
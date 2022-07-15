export const exit = () => {
  const indexPath = window.location.href.slice(0, window.location.href.lastIndexOf('/'));
  const index = indexPath + '/index.html';

  const btnExit = document.querySelector('.btn-exit');

  btnExit.addEventListener('click', e => {
    e.preventDefault();

    document.cookie = "user=auth; path=/admin; max-age=0";
    window.location.href = index;
  });

};
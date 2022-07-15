export const redirect = () => {
  const indexPath = window.location.href.slice(0, window.location.href.lastIndexOf('/'));
  const index = indexPath + '/';
  const table = indexPath + '/table.html';

  if (window.location.href === index) {
    if (document.cookie === 'user=auth') {
      window.location.replace(table);
    }
  }

  if (window.location.href === table) {
    if (!document.cookie) {
      window.location.replace(index);
    }
  }

  console.log(index);
  console.log(table);

  if (window.location.href !== index && window.location.href !== table) {
    window.location.replace(index);
  }
};
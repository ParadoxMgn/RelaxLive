export const popup = () => {
  const modal = document.getElementById('modal');

  document.addEventListener('click', e => {

    if (e.target.closest('.btn-addItem')) {
      e.preventDefault();
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }

    if (e.target.closest('.cancel-button') || e.target.closest('.button__close') || e.target === modal) {
      e.preventDefault();
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
};
export const popup = () => {
  const modal = document.getElementById('modal');
  const modalHeader = modal.querySelector('.modal__header');

  document.addEventListener('click', e => {

    if (e.target.closest('.btn-addItem')) {
      e.preventDefault();
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      modalHeader.textContent = 'Добавление новой услуги';
    }

    if (e.target.closest('.action-change')) {
      e.preventDefault();
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      modalHeader.textContent = 'Редактировать услугу';
    }

    if (e.target.closest('.cancel-button') || e.target.closest('.button__close') || e.target === modal) {
      e.preventDefault();
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
};
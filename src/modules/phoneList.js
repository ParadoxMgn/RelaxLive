export const phoneList = () => {
  const contactsArrow = document.querySelector('.header-contacts__arrow');
  const phoneNumberAccord = document.querySelector('.header-contacts__phone-number-accord');
  const phoneNumber = phoneNumberAccord.querySelector('.header-contacts__phone-number');

  contactsArrow.addEventListener('click', e => {
    if (e.target.closest('.header-contacts__arrow') && !contactsArrow.dataset.key) {
      contactsArrow.dataset.key = '1';
      contactsArrow.querySelector('img').style.margin = '12px 5px';
      contactsArrow.style.transform = 'rotate(180deg)';
      phoneNumberAccord.style.top = '30px';
      phoneNumber.style.opacity = '1';
    } else {
      contactsArrow.removeAttribute('data-key');
      contactsArrow.style.transform = 'rotate(0deg)';
      phoneNumberAccord.style.top = '0';
      phoneNumber.style.opacity = '0';
    }
  });
};
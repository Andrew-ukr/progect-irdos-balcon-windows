const modals = () => {
  let scrollWidth;
  let modalTimer;

  function openModal(btnClass, modalPopupClass, closeBtnClass, overlayClose) {
    let btn = document.querySelectorAll(btnClass);
    let modalPopup = document.querySelector(modalPopupClass);
    let closeBtn = document.querySelector(closeBtnClass);
    let allModalWindows = document.querySelectorAll(`[data-moadl]`);

    btn.forEach(element => {
      element.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }
        allModalWindows.forEach(item => {
          item.style.display = 'none';
        });
        modalPopup.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scrollWidth}px`;
        clearTimeout(modalTimer);
      });
    });

    closeBtn.addEventListener('click', (e) => {
      if (e.target) {
        e.preventDefault();
      }
      modalPopup.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = ``;
    });

    modalPopup.addEventListener('click', (e) => {
      if (e.target === modalPopup && !overlayClose) {
        modalPopup.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = ``;
      }
    });
  }

  function modalMR() {
    let div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    document.body.append(div);
    scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();
  }

  function callModalTimer(modalPopupClass, time) {
    modalTimer = setTimeout(() => {
      document.querySelector(modalPopupClass).style.display = 'block';
      document.body.style.marginRight = `${scrollWidth}px`;
      document.body.style.overflow = 'hidden';
    }, time);
  }

  modalMR();
  openModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  openModal('.phone_link', '.popup', '.popup .popup_close');
  openModal('.glazing_price_btn', '.popup_calc', '.popup_calc_close', true);
  openModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', true);
  openModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', true);
  // callModalTimer('.popup', 3000);

};

export default modals;
let calc = (calcForm) => {
  let windowForm = document.querySelectorAll('.balcon_icons_img');
  let windowWidth = document.querySelectorAll('#width');
  let windowHeight = document.querySelectorAll('#height');
  let windowViewType = document.querySelectorAll('#view_type');
  let windowCheckbox = document.querySelectorAll('.checkbox');

  windowWidth.forEach(elem => {
    elem.addEventListener('input', () => {
      elem.value = elem.value.replace(/\D/, '');
    });
  });

  function getCalcData(selector, event, prop) {
    selector.forEach((item, i) => {
      item.addEventListener(event, () => {
        if (item.type === "select-one") { // вибір матеріалу профілю
          calcForm[prop] = item.value;
          console.log(calcForm);
        } else if (item.type === "checkbox") { // вибір тип профілю холодний/теплий
          selector.forEach((elem, b) => {
            elem.checked = false;
            if (i === b) {
              elem.checked = 'true';
            }
          });
          calcForm[prop] = i;
          console.log(calcForm);
        } else if (item.nodeName === "INPUT") { // вибір форми вікна
          selector.forEach(elem => {
            elem.addEventListener('input', () => {
              elem.value = elem.value.replace(/\D/, '');
            });
          });
          calcForm[prop] = item.value;
          console.log(calcForm);
        } else { // введення ширини та довжини віконнох рами
          calcForm[prop] = i + 1;
          console.log(calcForm);
        }
      });
    });
  }

  getCalcData(windowForm, 'click', 'form');
  getCalcData(windowWidth, 'input', 'width');
  getCalcData(windowHeight, 'input', 'height');
  getCalcData(windowViewType, 'change', 'view_type');
  getCalcData(windowCheckbox, 'change', 'checkbox');


};

export default calc;
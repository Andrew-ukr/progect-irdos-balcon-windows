const bigImg = () => {

  let imgArea = document.querySelector('.works');
  let divTeg = document.createElement('div');
  let imgTeg = document.createElement('img');
  let scrollWidth;

  function modalMR() {
    let div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    document.body.append(div);
    scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();
  }
  modalMR();
  divTeg.appendChild(imgTeg);
  divTeg.classList.add('popup');
  imgArea.appendChild(divTeg);
  divTeg.style.justifyContent = 'center';
  divTeg.style.alignItems = 'center';

  imgArea.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target && e.target.classList.contains('preview')) {
      let imgAtr = e.target.parentNode.getAttribute('href');
      imgTeg.setAttribute('src', imgAtr);
      divTeg.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${scrollWidth}px`;
    }

    if (e.target && e.target.classList.contains('popup')) {
      divTeg.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = ``;
    }
  });
};

export default bigImg;
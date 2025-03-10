const tabs = () => {
  function openTab(tabsHeaderClass, tabsItemClass, tabsBodyClass, addActiveClass, display = 'block') {
    let tabsHeader = document.querySelector(`.${tabsHeaderClass}`);
    let tabsItem = document.querySelectorAll(`.${tabsItemClass}`);
    let tabsBody = document.querySelectorAll(`.${tabsBodyClass}`);


    function hide() {
      tabsItem.forEach(item => {
        item.classList.remove(addActiveClass);
      });



      tabsBody.forEach(item => {
        item.style.display = 'none';
      });
    }

    function show(i = 0) {
      tabsItem[i].classList.add(addActiveClass);
      tabsBody[i].style.display = display;
    }

    hide();
    show();

    tabsHeader.addEventListener('click', (e) => {
      if (e.target && (e.target.classList.contains(tabsItemClass) || e.target.parentNode.classList.contains(tabsItemClass))) {
        tabsItem.forEach((item, i) => {
          if (e.target === item || e.target.parentNode === item) {
            hide();
            show(i);
          }
        });
      }
    });
  }

  openTab("glazing_slider", 'glazing_block', 'glazing_content', 'after_click');
  openTab("decoration_slider", 'no_click', 'decoration_content > div > div', 'after_click');
  openTab("balcon_icons", 'balcon_icons_img', 'big_img > img', 'do_image_more', 'inline');

};
export default tabs;
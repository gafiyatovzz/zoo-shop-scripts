import icons from "../../../utils/icons.js";

const openMenu = () => {
  document.querySelector('.menu-burger').addEventListener('click', (e) => {
    e.target.closest('.navigation-wrapper').querySelector('.custom_menu').classList.toggle('menu_closed');
    e.target.closest('.navigation-wrapper').querySelector('#nav-icon1').classList.toggle('open');
  })

  document.querySelector('.custom-menu_wrapper').addEventListener('click', (e) => {
    e.target.closest('.custom_menu').classList.add('menu_closed')
    e.target.closest('.navigation-wrapper').querySelector('#nav-icon1').classList.remove('open');
  });

  document.querySelector('.navigation-wrapper').addEventListener('click', (e) => {
    e.target.closest('nav').querySelector('.custom_menu').classList.add('menu_closed')
    e.target.querySelector('#nav-icon1').classList.remove('open');
  });
}

export default openMenu;
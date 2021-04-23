const _openMenu = (elem) => elem && elem.classList.remove('d-none');
const _closeMenu = (elem) => elem && elem.classList.add('d-none');

const showSubMenu = () => {
  const list = document.querySelectorAll('.custom_menu > div > .menu-col-left > a');
  let iD, subMenu;

  document.querySelector('.menu-col-right > ul:first-child').classList.remove('d-none');

  list.forEach((el) => {
    el.addEventListener('mouseover', (e) => {
      const target = e.target;
      if (target.classList.contains('has_child')) {
        iD = target.getAttribute('id');

        subMenu = target.closest('.custom_menu').querySelector(`.menu-col-right ul[id="${iD}"]`);
        let activeNav = target.closest('.custom_menu').querySelector(`.menu-col-right ul[id="${iD}"]`);

        if (!activeNav.classList.contains('d-none')) {

        }

        target
          .closest('.custom_menu')
          .querySelectorAll('ul[id]')
          .forEach((ul) => {
            if (!ul.classList.contains('d-none')) {
              _closeMenu(ul);
            }
          });
        _openMenu(subMenu);
      }
    });
  });
};

export default showSubMenu;

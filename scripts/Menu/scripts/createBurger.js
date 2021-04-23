import icons from '../../../utils/icons.js';

const createBurger = (container) => {
  container.insertAdjacentHTML(
    'afterbegin',
    `<button class="menu-burger">
        <div id="nav-icon1">
          <span></span>
          <span></span>
          <span></span>
        </div>
      <span class="catalog-title">Каталог товаров</span>
    </button>`,
  );
};

export default createBurger;

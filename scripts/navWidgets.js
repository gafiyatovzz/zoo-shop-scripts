const navWidgets = (icons) => {
  document.querySelector('.navigation-wrapper .navigation').insertAdjacentHTML(
    'beforeend',
    `
    <div class="nav-widgets">
      <div class="nav-widgets__elem">
        <a href="tel:7349225227">
          <i>${icons.callPhone}</i>
          <span>
          +7 (34922) 5-22-76</span>
        </a>
      </div>
    </div>
  `,
  );
};

export default navWidgets;

/* <div class="nav-widgets__elem">
        <a href="mailto:sales@kusi.ru">
          <i>${icons.email}</i>
        </a>
      </div>
      <div class="nav-widgets__elem">
        <a href="/address">
          <i>${icons.dotMap}</i>
        </a>
      </div> */

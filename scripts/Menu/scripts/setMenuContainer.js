const setMenuContainer = (container) => {
  container.insertAdjacentHTML('beforeend', `
  <div class="custom_menu menu_closed">
    <div class="container">
      <div class="col-md-2 menu-col-left"></div>
      <div class="col-md-10 menu-col-right"></div>
    </div>
    <div class="custom-menu_wrapper"></div>
  </div>
  `);
}

export default setMenuContainer;
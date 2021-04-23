const _setBtnText = (btn, qty, price) => {
  btn.innerHTML = `Товаров: <strong>${qty ? qty.outerText : 0}</strong> на <strong>${
    price && !price.textContent.includes('Ваша') ? price.outerText : 0
  }</strong>`;
};

const _setObserver = (params, cb) => {
  let target = params.target;
  const config = {
    childList: true,
  };
  const callback = function (mutationsList, observer) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        document.querySelector('.desktop-added-to-cart h2') && (document.querySelector('.desktop-added-to-cart h2').textContent = 'Товар добавлен в корзину');
        if (params.target.outerText != '0') {
          let qty = document.querySelector(
            'body.ltr.ru .header-cart .cart-wrapper .cart-qty-circle',
          );
          let price = document.querySelector(
            'header > div.header-wrapper > div.container > div.header_widgets > div.header-cart .vouchers .media .item-price',
          );
          cb(params.btn, qty, price);
        } else {
          let qty = document.querySelector(
            'body.ltr.ru .header-cart .cart-wrapper .cart-qty-circle',
          );
          let price = document.querySelector(
            'header > div.header-wrapper > div.container > div.header_widgets > div.header-cart .vouchers .media .item-price',
          );
          cb(params.btn, qty, price);
        }
      }
    }
  };
  const observer = new MutationObserver(callback);
  observer.observe(target, config);
};

const changeTextBtnCart = () => {
  const qty = document.querySelector('body.ltr.ru .header-cart .cart-wrapper .cart-qty-circle');
  const btn = document.querySelector('body.ltr.ru .header-cart .cart-wrapper span:first-child');
  let container = document.querySelector(
    '#home > div > header > div.header-wrapper > div.container > div.header_widgets > div.header-cart > div > div.dropdown.cart_drop_down .cart-content',
  );

  // document.querySelector('.desktop-added-to-cart h2').textContent = 'Товар добавлен в корзину';

  if (qty.outerText != '0') {
    _setBtnText(btn, qty, container.querySelector('.media .item-price'));
    _setObserver({ target: qty, btn, container }, _setBtnText); //следим за кол-вом товара и меняем
    _setObserver({ target: container, btn, qty }, _setBtnText); // следим за суммой и меняем
  } else {
    _setBtnText(btn, qty, container);
    _setObserver({ target: qty, btn, container }, _setBtnText);
    _setObserver({ target: container, btn, qty }, _setBtnText);
  }
};

export default changeTextBtnCart;

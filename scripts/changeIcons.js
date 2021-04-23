const changeIcons = (icons) => {
  // document.querySelector('.header_login .fa-user') && document.querySelector('.header_login .fa-user').insertAdjacentHTML('afterbegin', icons.heart)
  document.querySelector('.dropdown.cart_drop_down #cart .fa-shopping-cart').insertAdjacentHTML('afterbegin', icons.cart)
}

export default changeIcons;
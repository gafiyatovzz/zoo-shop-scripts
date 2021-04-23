const constants = {
  container: document.querySelector('.product-single #product.row .form-group.option-group'),
  inputOptions: document.querySelector('.product-single #product.row .form-group.option-group > label ~ div'),
  options: document.querySelectorAll('.product-single #product.row .form-group.option-group > label ~ div > .checkbox'),
  checkbox: document.querySelectorAll('.product-single #product.row .form-group.option-group > label ~ div > .checkbox'),
  optionsLabel: document.querySelectorAll('.product-single #product.row .form-group.option-group > label ~ div > .checkbox > label.custom-control-label'),
  price: document.querySelector('.product-single .product-price'),
  regx: {
    cutPrice: /\(([\d\. ]+)/,
    regexRepalce: /\(\+([\d\. ]+)₽\)/gi,
    getPrice: /(\d+ [\d+]+)|(\d+)/,
    getNameInput: /^[(\d+)|(\d+\.\d)]+\s[\wА-Яа-я]+/i,
  },
};

export default constants;
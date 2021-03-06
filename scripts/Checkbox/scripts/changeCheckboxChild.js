import constants from '../utils/constants.js';
import getInnerText from './getInnerText.js';

const setListener = () => {
  const basedPrice = constants.price.textContent;
  const basedPriceCut = basedPrice.match(/[\d]/g);
  basedPriceCut.splice(-2, 4).join('')
  constants.container.addEventListener('click', (e) => {
    const price = +e.target
      .closest('.checkbox')
      .querySelector('.input-option_price')
      .textContent.split(/[^\d]/g)
      .join('');

    const cutBasedPrice = basedPriceCut.includes(' ') ? basedPriceCut.replace(/\s/g, '') : basedPriceCut
    const sum = price + +cutBasedPrice.join('');
    const sumArr = sum.toString();
    let newPrice = sumArr.split('');

    // Пробелы в цене
    if (sumArr.length == 4) {
      newPrice.splice(1, 0, ' ').join('');
    } else if (sumArr.length == 5) {
      newPrice.splice(2, 0, ' ');
    } else if (sumArr.length == 6) {
      newPrice.splice(3, 0, ' ');
    }

    if (price !== +basedPriceCut.join('')) {
      constants.price.textContent = newPrice.join('') + '.00 ₽';
    } else {
      constants.price.textContent = basedPrice;
    }
  });
};

const changeCheckboxChild = () => {
  const innerTexts = getInnerText();
  Array.from(constants.optionsLabel).map((el, i) => {
    const input = innerTexts[i].trim().match(constants.regx.getNameInput);
    const plusOrMinus = innerTexts[i].match(/\+|\-/);
    const text =
      innerTexts[i].match(constants.regx.regexRepalce) &&
      innerTexts[i].match(constants.regx.regexRepalce)[0];

    const price = text && text.match(constants.regx.getPrice);
    const mainPrice = constants.price.textContent.match(constants.regx.getPrice);
    el.textContent = '';
    el.insertAdjacentHTML(
      'beforeend',
      `
        <div class="input-option_name">${input && input[0]}</div>
        <div class="input-option_price">${plusOrMinus ? plusOrMinus[0] : ''}${
        price ? price[0] : mainPrice[0]
      } ₽</div>
    `,
    );
  });
};

export { changeCheckboxChild, setListener };

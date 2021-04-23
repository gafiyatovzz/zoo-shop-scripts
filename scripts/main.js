import pages from '../config/conditions.js';
import icons from '../utils/icons.js';

import changeContainerSelector from './changeContainerSelector.js';
import changeIcons from './changeIcons.js';
import changeLinkToWishList from './changeLinkToWishList.js';
import changeTextBtnCart from './changeTextBtnCart.js';
import navWidgets from './navWidgets.js';
import cutSrcImg from './cutSrcImg.js';
import addTitleForCategory from './addTitleForCategory.js';
import createContainer from './createContainer.js';

import activatePartners from './Partners/Partners.js';
import activateMenu from './Menu/Menu.js';
import activateNews from './News/News.js';
import activateAdvantages from './Advantages/Advantages.js';
import activateCheckbox from './Checkbox/Checkbox.js';
import cutSrcBanner from './cutSrcBanner.js';
import activateTabs from './Tabs/Tabs.js';
import changeLogo from './changeLogo.js';
import activateNavList from './NavList/NavList.js';
import setSocIcons from './setSocIcons.js';
import changeTypeInput from './changeTypeInput.js';
import setObserverForScroll from './setObserverForScroll.js';
import changeLinkImgCat from './changeLinkImgCat.js';

if (pages.all) {
  changeContainerSelector();
  changeIcons(icons);
  // changeLinkToWishList();
  changeTextBtnCart();
  activateMenu();
  navWidgets(icons);
  cutSrcImg();
  changeLogo();
  setSocIcons();
  setObserverForScroll();
}

if (pages.main) {
  cutSrcImg();
  addTitleForCategory('Категории');
  createContainer();
  activateAdvantages();
  activatePartners();
  activateNews();
  cutSrcBanner();
}
if (pages.product) {
  activateCheckbox();
  activateTabs();
  changeTypeInput();
}

if (pages.category) {
  activateNavList();
  changeLinkImgCat();
}

if (pages.checkout || pages.register) {
  jQuery(function () {
    $('#input-payment-cityId')
      ? $('#input-payment-cityId').attr('value', '195911631')
      : $('#input-cityId').attr('value', '195911631');

    $('#input-payment-cityId + input').attr('value', '---');

    $('#select2-input-payment-city-container')
      ? $('#select2-input-payment-city-container').html('Cалехард')
      : $('#select2-input-city-container').html('Cалехард');

    $('#input-shipping-cityId').attr('value', '195911631');
    $('.city_name').attr('value', 'Салехард');
    $('#select2-input-shipping-city-container').html('Cалехард');

    if (document.querySelector('#select2-input-payment-city-container')) {
      document.querySelector('#select2-input-payment-city-container').textContent = 'Салехард';
    } else {
      document.querySelector('#select2-input-city-container').textContent = 'Салехард';
      document.querySelector('#input-cityId').setAttribute('value', '195911631');
      document.querySelector('.city_name').setAttribute('value', 'Салехард');
    }
  });

  document.querySelector('#register_toggle')
    ? (document.querySelector('#register_toggle').childNodes[2].textContent =
        'Зарегистрироваться, чтобы получать привилегии')
    : '';
}

if (pages.register) {
  // document.querySelector('#input-zone option[value="2780"]').setAttribute('selected', 'true')
  // document.querySelector('#input-zone option[value="2780"]').setAttribute('hidden', 'true')
  // document.querySelector('#input-zone option[value="2780"]').setAttribute('disabled', 'true');
  // document.querySelector('#input-zone ').setAttribute('disabled', 'true');
  document
    .querySelector('.form-group #input-address-1')
    .setAttribute('placeholder', 'Улица, дом, корпус, подъезд, квартира');
  document.querySelector('#address > div:nth-child(2) label').textContent =
    'Улица, дом, корпус, подъезд, квартира';
}

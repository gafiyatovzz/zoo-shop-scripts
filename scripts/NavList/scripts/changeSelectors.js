import constants from '../utils/constants.js';

const changeSelectors = () => {
  constants.content.classList.add('col-md-9', 'col-12');
  constants.content.classList.remove('col-12');

  constants.productItems.forEach((item) => {
    item.classList.remove('col-xl-3');
  });

  if (constants.productContainer) {
    let target = constants.productContainer;
    const config = {
      childList: true,
    };
    const callback = function (mutationsList, observer) {
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
          target.querySelectorAll('.product-item').forEach((item) => {
            item.classList.remove('col-xl-3');
          });
        }
      }
    };
    const observer = new MutationObserver(callback);
    observer.observe(target, config);
  }
};

export default changeSelectors;

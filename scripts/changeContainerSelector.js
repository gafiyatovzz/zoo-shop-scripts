const changeContainerSelector = () => {
  document.querySelector('header .header-wrapper .container-fluid').classList.add('container');
  document
    .querySelector('header .header-wrapper .container-fluid')
    .classList.remove('container-fluid');
};

export default changeContainerSelector;

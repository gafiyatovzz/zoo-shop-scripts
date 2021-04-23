const changeLogo = () => {
  const logoSellavi = document.querySelector('footer #sellavi_logo > img');

  if (logoSellavi) {
    logoSellavi.setAttribute(
      'src',
      'https://res.cloudinary.com/depgheppz/image/upload/v1612986109/Frame_4_l3scow.png',
    );
  }
};

export default changeLogo
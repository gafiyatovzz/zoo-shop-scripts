import constants from '../utils/constants.js';

const getNavs = () => {
  return Array.from(constants.subCategories).map((el) => {
    return {
      link: el.getAttribute('href'),
      title: el.querySelector('.caption-title span').textContent,
    };
  });
};

export default getNavs;

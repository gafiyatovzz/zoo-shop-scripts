import constants from './utils/constants.js'
import renderNewsData from './scripts/renderNewsData.js';
import renderNewsContainer from './scripts/renderNewsContainer.js';

const activateNews = () => {
  renderNewsContainer('Наши новости', renderNewsData(constants.partners))
}

export default activateNews;

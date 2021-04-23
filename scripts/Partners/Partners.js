import constants from './utils/constants.js'
import renderPartnersData from './scripts/renderPartnersData.js';
import renderPartnersContainer from './scripts/renderPartnersContainer.js';

const activatePartners = () => {
  renderPartnersContainer('Наши партнеры', renderPartnersData(constants.partners))
}

export default activatePartners;

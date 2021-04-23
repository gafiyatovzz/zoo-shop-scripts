import constants from './utils/constants.js'
import renderAdvantagesData from './scripts/renderAdvantagesData.js';
import renderAdvantagesContainer from './scripts/renderAdvantagesContainer.js';

const activateAdvantages = () => {
  renderAdvantagesContainer('Наши преимущества', renderAdvantagesData(constants.advantages))
}

export default activateAdvantages;

import constants from '../utils/constants.js';

const getInnerText = () => Array.from(constants.optionsLabel).map(el => el.textContent.trim());

export default getInnerText;

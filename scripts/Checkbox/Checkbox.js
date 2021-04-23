import {setListener, changeCheckboxChild} from './scripts/changeCheckboxChild.js';
import constants from './utils/constants.js';

const activateCheckbox = () => {
  if (constants.container && constants.checkbox) {
    changeCheckboxChild()
    setListener()
  }
};

export default activateCheckbox;

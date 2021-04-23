import changeSelectors from "./scripts/changeSelectors.js";
import setNewCol from "./scripts/setNewCol.js"
import setTitle from "./scripts/setTitle.js";

const activateNavList = () => {
  setNewCol();
  changeSelectors();
  setTitle('Товары');
}

export default activateNavList
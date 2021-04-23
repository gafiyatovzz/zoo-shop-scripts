import constants from './utils/constants.js';
import openMenu from './scripts/openMenu.js';
import createBurger from './scripts/createBurger.js';
import setMenuContainer from './scripts/setMenuContainer.js';
import renderLevels from './scripts/renderLevels.js';
import showSubMenu from './scripts/showSubMenu.js';

const activateMenu = () => {
  setMenuContainer(constants.navigationWrapper);
  createBurger(constants.navigation);
  openMenu(constants.burger);
  renderLevels(constants.levelsNav);
  showSubMenu();
}

export default activateMenu;

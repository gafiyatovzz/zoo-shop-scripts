import constants from "../utils/constants.js"
import getNavs from "./getNavs.js";

const navs = getNavs();

const _renderLevels = () => {
  return navs.map(el => {
    return `<li><a href="${el.link}">${el.title}</a></li>`
  }).join('')
}

const setNewCol = () => {
  constants.categoryContentWrapper.insertAdjacentHTML('afterbegin', `
    <div class="col-md-3 col-12" class="nav-list">
      <h5 class="nav-list__title mb-4">Категории</h5>
      <ul class="nav-list__list">${_renderLevels()}</ul>
    </div>
  `)
}

export default setNewCol;
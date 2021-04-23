import constants from "../utils/constants.js";

const setTitle = (title) => {
  constants.productContainer && constants.productContainer.insertAdjacentHTML('afterbegin', `<h5 class="w-100 ml-3">${title}</h5>`)
}

export default setTitle;
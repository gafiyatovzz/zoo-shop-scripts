import getDescription from './getDescription.js';

const _hasContent = (arr) => arr.map((el) => (el.status ? el : false));
const data = _hasContent(getDescription());

const _renderNavs = (arr) => {
  return arr.map((tab) => {
    if (tab) {
      return `
    <li class="nav-item">
      <a class="nav-link ${arr[0] == tab ? tab.classesNav : '' }" id="${tab.areaLabelLedBy}" data-toggle="tab" href="#${tab.id}" role="tab" aria-controls="${tab.id}" aria-selected="${arr[0] ? 'true' : 'false'}">${tab.nav.name}</a>
    </li>`;
    //<a class="nav-link" id="" data-toggle="tab" href="${tab.nav.href}" role="tab" aria-controls="${tab.id}" aria-selected="false">${tab.nav.name}</a>
    }
  }).join('')
};

const _renderTabs = (arr) => {
  return arr.map((tab) => {
    if (tab) {
      return `<div class="tab-pane fade ${arr[0] == tab ? tab.classesContent : ''}" id="${tab.id}" role="tabpanel" aria-labelledby="${tab.areaLabelLedBy}">${tab.content}</div>`
      // `<div class="tab-pane fade" id="${tab.id}" role="tabpanel" aria-labelledby="${tab.areaLabelLedBy}">${tab.content}</div>`;
    }
  }).join('');
};


const _wrapper = (obj) => {
  return `
    <section class="custom-tabs">
        <div class="container">
          <ul class="nav nav-pills" id="myTab" role="tablist">
              ${_renderNavs(obj)}
          </ul>
          <div class="tab-content" id="myTabContent">
              ${_renderTabs(obj)}
          </div>
        </div>
    </section>
  `;
};

const tabsWrapper = () => {
  document
    .querySelector('.page-section > div > .row.product-single.product-item')
    .insertAdjacentHTML('afterend', _wrapper(data));

};

export default tabsWrapper;

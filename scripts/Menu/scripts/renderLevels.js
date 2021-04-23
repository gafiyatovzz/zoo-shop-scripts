const getLevels = (arr) => {
  return Array.from(arr)
    .map((level) => {
      if (level.querySelector('ul')) {
        const iD = level.getAttribute('data-nav-part');
        level.querySelector('ul').setAttribute('id', iD);
        level.querySelector('ul>.megaline') ? level.querySelector('ul').classList.add('d-none', 'with_megaline') : level.querySelector('ul').classList.add('d-none');
        level.querySelector('a').setAttribute('id', iD);
        level.querySelector('a').classList.add('has_child')
        return {
          outer: level.querySelector('a'),
          inner: level.querySelector('ul'),
        };
      } else {
        return { outer: level.querySelector('a')};
      }
    })
    ;
};

const renderLevels = (obj) => {
  getLevels(obj.level_1).forEach((lv) => {
    if (lv.inner && lv.outer) {
      document
      .querySelector('.custom_menu>div>div:first-child')
      .insertAdjacentHTML('beforeend', lv.outer.outerHTML );

      document
      .querySelector('.custom_menu>div>div:last-child')
      .insertAdjacentHTML(
        'beforeend',
        lv.inner.outerHTML
      );
    } else {
      document
      .querySelector('.custom_menu>div>div:first-child')
      .insertAdjacentHTML('beforeend', lv.outer.outerHTML );
    }
  });

};

export default renderLevels;

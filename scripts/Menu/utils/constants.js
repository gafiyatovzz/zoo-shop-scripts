const constants = {
  levelsNav: {
    level_1: document.querySelectorAll('header .nav.sf-menu>li'),
    level_2: document.querySelectorAll('header .nav.sf-menu>li>ul>.megaline>div>.block-title>span>a'),
    level_3: document.querySelectorAll('header .nav.sf-menu>li>ul>.megaline>div>ul>li>a'),
  },
  navigation: document.querySelector('header .navigation'),
  navigationWrapper: document.querySelector('header .navigation-wrapper'),
  burger: document.querySelector('.mobile-navigation-wrapper')
};

export default constants;
const getDescription = () => {
  return [
    {
      status:  document.querySelector(
        '.page-section > div > .row.product-single.product-item .tab-pane.active #description-content',
      ) ? true : false,
      classesNav: 'active',
      classesContent: 'show active',
      nav: {
        name: 'Описание',
        ariaControls: 'description',
        id: 'descripton-tab',
        href: '#description',
      },
      content:
        document.querySelector(
          '.page-section > div > .row.product-single.product-item .tab-pane.active #description-content',
        ) &&
        document.querySelector(
          '.page-section > div > .row.product-single.product-item .tab-pane.active #description-content',
        ).textContent,
      areaLabelLedBy: 'descripton-tab',
      id: 'description',
    },
    {
      status:  document.querySelector(
        '.page-section > div > .row.product-single.product-item .tab-pane.active #composition-content',
      ) ? true : false,
      nav: {
        name: 'Состав',
        ariaControls: 'composition',
        id: 'composition-tab',
        href: '#composition',
      },
      content:
        document.querySelector(
          '.page-section > div > .row.product-single.product-item .tab-pane.active #composition-content',
        ) &&
        document.querySelector(
          '.page-section > div > .row.product-single.product-item .tab-pane.active #composition-content',
        ).textContent,
      areaLabelLedBy: 'composition-tab',
      id: 'composition',
    },
    {
      status:  document.querySelector(
        '.page-section > div > .row.product-single.product-item .tab-pane.active #recomendations-content',
      ) ? true : false,
      nav: {
        name: 'Рекомендации по кормлению',
        ariaControls: 'recomendations',
        id: 'recomendations-tab',
        href: '#recomendations',
      },
      content:
        document.querySelector(
          '.page-section > div > .row.product-single.product-item .tab-pane.active #recomendations-content',
        ) &&
        document.querySelector(
          '.page-section > div > .row.product-single.product-item .tab-pane.active #recomendations-content',
        ).textContent,
      areaLabelLedBy: 'recomendations-tab',
      id: 'recomendations',
    },
  ];
};

export default getDescription;

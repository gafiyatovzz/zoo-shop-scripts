const renderAdvantagesData = (list) => {
  return list
    .map((el) => {
      return `
    <div class="advantages-item col-md-3 col-6">
        <img class="advantages-img" src="${el.src}" alt="${el.alt}">
    </div>
    `;
    })
    .join('');
};

export default renderAdvantagesData;

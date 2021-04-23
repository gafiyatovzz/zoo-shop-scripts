const renderPartnersData = (list) => {
  return list.map(el => {
    return `
    <div class="partner">
      <a  href="${el.link}">
        <img class="partner-img" src="${el.src}" alt="${el.alt}">
      </a>
    </div>
    `
  }).join('')
}

export default renderPartnersData;
const renderNewsData = (list) => {
  return list.map(el => {
    return `
    <div class="news-item col-md-6 col-12 mb-4">
      <a  href="${el.link}">
        <img loading="lazy" class="news-img" src="${el.src}" alt="${el.alt}">
      </a>
    </div>
    `
  }).join('')
}

export default renderNewsData;
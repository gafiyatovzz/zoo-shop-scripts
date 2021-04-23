const renderNewsContainer = (title, list) => {
  document.querySelector('.homefeatured_category').insertAdjacentHTML('beforebegin', `
    <section class="news">
      <div class="container">
        <h2 class="section-title"><span>${title}</span></h2>
        <div class="news-container">
          ${list}
        </div>
      </div>
    </section>
  `)
}

export default renderNewsContainer;
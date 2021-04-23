const renderPartnersContainer = (title, list) => {
  document.querySelector('.custom_section > .container').insertAdjacentHTML('beforeend', `
    <section class="partners">
      <h2 class="section-title"><span>${title}</span></h2>
      <div class="partners-container">
        ${list}
      </div>
    </section>
  `)
}

export default renderPartnersContainer;
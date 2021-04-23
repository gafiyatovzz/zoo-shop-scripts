const renderAdvantagesContainer = (title, list) => {
  document.querySelector('.custom_section > .container').insertAdjacentHTML('beforeend', `
    <section class="advantages">
      <div class="">
        <h2 class="section-title"><span>${title}</span></h2>
        <div class="advantages-container">
          ${list}
        </div>
      </div>
    </section>
  `)
}

export default renderAdvantagesContainer;
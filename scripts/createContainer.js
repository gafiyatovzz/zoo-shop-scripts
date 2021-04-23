const createContainer = () => {
  document.querySelector('.custom_section').insertAdjacentHTML('beforeend', `
    <div class="container"></div>
  `)
}

export default createContainer;
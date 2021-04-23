
const optimizeLoading = () => {
  const script = document.createElement('script')
  const body = document.querySelector('body');

  script.setAttribute('type', 'module');
  script.setAttribute('src', 'https://sellavi-russia-dev.github.io/SLC/shops/104388/index.js')

  body.appendChild(script)
}


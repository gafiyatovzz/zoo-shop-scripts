const changeTypeInput = () => {
  const inputs = document.querySelectorAll('.checkbox.custom-control.custom-checkbox')
  inputs.length > 0 && inputs.forEach(input => input.querySelector('input').setAttribute('type', 'radio'));
}

export default changeTypeInput
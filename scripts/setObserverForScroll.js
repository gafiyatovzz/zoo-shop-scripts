const setObserverForScroll = () => {
  const target = document.querySelector("#home > div > header > div.header-wrapper > div.container > div.header_widgets > div.header-cart.sticky > div.cart-wrapper > div.dropdown.cart_drop_down > div > div > div > div > div > div.row.cart-header > div > p")
  const config = {
    childList: true,
  };
  const callback = function (mutationsList, observer) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
      }
    }
  };
  const observer = new MutationObserver(callback);
  observer.observe(target, config);
}

export default setObserverForScroll;
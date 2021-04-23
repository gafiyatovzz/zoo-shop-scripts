const cutSrcBanner = () => {
  if (window.screen.width >= 992) {
    const sourceCat = document.querySelectorAll(
      '.common-home>.wrapper>.content-area>.main-slider>#banner0>.owl-wrapper-outer>.owl-wrapper>.owl-item>.item>.img-bg>source',
    );

    sourceCat.forEach((source) => {
      const srcset = source.getAttribute('srcset');
      let replacedSrc1 = srcset.replace(
        /\/if_w_lte_1900,c_pad,h_460,w_1900\/if_w_gte_3000,c_fill,h_460,w_1900\/c_crop,h_460,w_1900/gi,
        '',
      );
      source.setAttribute('srcset', replacedSrc1);
    });
  }
}

export default cutSrcBanner;
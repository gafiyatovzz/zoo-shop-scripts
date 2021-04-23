const changeLinkImgCat = () => {
  const mediaHolder = document.querySelectorAll('.media_holder .img_holder img');

  mediaHolder && mediaHolder.forEach((img) => {
    img.setAttribute('src', img.getAttribute('src').replace('c_fill,r_max', 'c_fit'));
  });
};

export default changeLinkImgCat;

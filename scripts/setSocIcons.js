import SocIconsTypeOneV2 from "../../../components/SocialIconsTypeOne/SocialIconsTypeOneV2.js";

const socIconsData = [
  {
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 0.5H8C3.8585 0.5 0.5 3.8585 0.5 8V20C0.5 24.1415 3.8585 27.5 8 27.5H20C24.1415 27.5 27.5 24.1415 27.5 20V8C27.5 3.8585 24.1415 0.5 20 0.5ZM14 21.5C9.8585 21.5 6.5 18.1415 6.5 14C6.5 9.8585 9.8585 6.5 14 6.5C18.1415 6.5 21.5 9.8585 21.5 14C21.5 18.1415 18.1415 21.5 14 21.5ZM23 6.5C22.172 6.5 21.5 5.828 21.5 5C21.5 4.172 22.172 3.5 23 3.5C23.828 3.5 24.5 4.172 24.5 5C24.5 5.828 23.828 6.5 23 6.5Z" fill="url(#paint0_linear)"/>
    <path d="M14 9.5C12.8065 9.5 11.6619 9.97411 10.818 10.818C9.97411 11.6619 9.5 12.8065 9.5 14C9.5 15.1935 9.97411 16.3381 10.818 17.182C11.6619 18.0259 12.8065 18.5 14 18.5C15.1935 18.5 16.3381 18.0259 17.182 17.182C18.0259 16.3381 18.5 15.1935 18.5 14C18.5 12.8065 18.0259 11.6619 17.182 10.818C16.3381 9.97411 15.1935 9.5 14 9.5Z" fill="url(#paint1_linear)"/>
    <defs>
    <linearGradient id="paint0_linear" x1="14" y1="0.5" x2="14" y2="27.5" gradientUnits="userSpaceOnUse">
    <stop stop-color="#DEDEDE"/>
    <stop offset="0.9875" stop-color="#9D9D9D"/>
    </linearGradient>
    <linearGradient id="paint1_linear" x1="14" y1="9.5" x2="14" y2="18.5" gradientUnits="userSpaceOnUse">
    <stop stop-color="#DEDEDE"/>
    <stop offset="0.9875" stop-color="#9D9D9D"/>
    </linearGradient>
    </defs>
    </svg>
    `,
    link: 'https://www.instagram.com/kusi.ru/',
  },
];

const setSocIcons = () => {
  const footerContainer = document.querySelector('.footer-widgets>div>div');

  new SocIconsTypeOneV2(footerContainer, 'beforeend', socIconsData).render();
};

export default setSocIcons
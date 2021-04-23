import Requisites from '../../../../modules/Requisites/Requisites.js';
import { requsites, dataContact } from '../requsites.js';

const orgName = Object.values(requsites)[0];

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', orgName, media);
  req.setTemplate();
}

if (location.href.includes('policy')) {
  const req = new Requisites(
    requsites,
    'afterend',
    orgName,
    document.querySelector('#content > div > div'),
  );
  req.setTemplate();
}

const termOfUse =
  '/%D0%A3%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F%20%D1%81%D0%BE%D0%B2%D0%B5%D1%80%D1%88%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%BE%D0%BA%20%D0%B2%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD%D0%B5/';

if (location.pathname == termOfUse) {
  const req = new Requisites(
    requsites,
    'beforeend',
    orgName,
    document.querySelector('.requsitess'),
  );
  req.setTemplate();
}

if (document.querySelector('.checkout-checkout') || document.querySelector('.account-register')) {
  console.log(document.querySelector('#agree-checkbox'));
  document.querySelector('#agree-checkbox ~ label .agree').addEventListener('click', () => {
    setTimeout(() => {
      const req = new Requisites(
        requsites,
        'beforeend',
        orgName,
        document.querySelector('.requsitess'),
      );
      console.log('click', document.querySelector('.requsitess'));
      req.setTemplate();
    }, 900);
  });
}

// if (location.href.includes('pay-delivery')) {
//   const req = new Requisites(
//     requsites,
//     'afterend',
//     orgName,
//     document.querySelector('#content > div > div'),
//     dataContact,
//   );
//   req.setTemplate();
// }

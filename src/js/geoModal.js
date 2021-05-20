import 'basiclightbox/dist/basiclightbox.min.css';
import * as basicLightbox from 'basiclightbox';
import { eventCardRef } from './refs';
import geoTmp from '../templates/geoTmpl.hbs';

eventCardRef.addEventListener('click', onCardClick);

function onCardClick(e) {
  e.preventDefault();
  if (e.target.nodeName === 'A') {
    const urlMap = e.target.attributes[0].value;
    const markupCard = geoTmp(urlMap);
    openModal(markupCard);
  }
  return;
  }

  
function openModal(markupInfo) {
  const geoModal = basicLightbox.create(`${markupInfo}`, {
    onShow: geoModal => {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keyup', closeOnEsc);
    },
    onClose: geoModal => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keyup', closeOnEsc);
    },
  });
  geoModal.show();

  function closeOnEsc(e) {
    if (e.key === 'Escape') {
      geoModal.close();
    }
  }
}

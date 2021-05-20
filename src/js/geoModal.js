import 'basiclightbox/dist/basiclightbox.min.css';
import * as basicLightbox from 'basiclightbox';
import { eventCardRef } from './refs';
import geoTmp from '../templates/geoTmpl.hbs';

eventCardRef.addEventListener('click', onCardClick);

function onCardClick(e) {
  e.preventDefault();
  let fetchResult = JSON.parse(localStorage.getItem('data'));
  if (
    e.target.classList.contains('event-place')) {
      const id = e.target.parentNode.id;
      const evtInfo = fetchResult.find(evt => evt.id === id);
      const evtInfoMarkup = geoTmp(evtInfo);
        openModal(evtInfoMarkup);
        console.log(evtInfoMarkup);
    }}
    

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
  }};



    

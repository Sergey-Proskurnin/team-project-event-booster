import 'basiclightbox/dist/basiclightbox.min.css';
const basicLightbox = require('basiclightbox');
import evtModalTmpl from '../templates/evtModal.hbs';
import evtModalInfo from '../templates/evtModalInfo.hbs';
import {
  eventCardRef,
  paginationRef,
  authWrapperRef,
  logoRef,
} from './refs';

import getUrlValue from './urlValue';
import 'firebaseui/dist/firebaseui.css';
import 'firebase/auth';
import 'firebase/database';

import {
 getAndRenderFavList,
 favBtnsToggle,
 removeFromDatabase,
 addToFav,
} from './dataBase'


let modal = basicLightbox;

eventCardRef.addEventListener('click', onCardClick);

function onCardClick(e) {
  if (
    e.target.classList.contains('event-image') ||
    e.target.classList.contains('event-title')
  ) {
    let fetchResult = JSON.parse(localStorage.getItem('data'));
    const id = e.target.parentNode.id;
    const evtInfo = fetchResult.find(evt => evt.id === id);
    const evtInfoMarkup = evtModalTmpl(evtInfo);
    openModal(evtInfoMarkup);
    infoTextToggle();
    favBtnsToggle(id);
    addListeners();
  }
}

function addListeners() {
  document.querySelector('.btn.next').addEventListener('click', slideNext);
  document.querySelector('.btn.prev').addEventListener('click', slidePrev);
  document.querySelector('.more-info').addEventListener('click', showMore);
  document
    .querySelector('#favourite')
    .addEventListener('click', onAddToFavCheck);
  document.querySelector('.my-fav').addEventListener('click', onMyFavClick);
}

function openModal(markupInfo) {
  modal = basicLightbox.create(`${markupInfo}`, {
    onShow: modal => {
      document.body.style.overflow = 'hidden';
      modal.element().querySelector('.close-modal').onclick = modal.close;
      document.addEventListener('keyup', closeOnEsc);
      authWrapperRef.style.display = 'none';
      logoRef.style.visibility = 'hidden';
    },
    onClose: modal => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keyup', closeOnEsc);
      authWrapperRef.style.display = 'block';
      logoRef.style.visibility = 'visible';
    },
  });
  modal.show();
 
 function closeOnEsc(e) {
    if (e.key === 'Escape') {
      modal.close();
    }
  }
}

function infoTextToggle() {
  const dots = document.getElementById('dots');
  const moreText = document.getElementById('more');
  if (document.contains(dots)) {
    dots.addEventListener('click', displayMore);
  }

  function displayMore() {
    if (dots.style.display === 'none') {
      dots.style.display = 'inline';
      moreText.style.display = 'none';
    } else {
      dots.style.display = 'none';
      moreText.style.display = 'inline';
      const lessBtn = document.getElementById('less');
      lessBtn.addEventListener('click', displayLess);
    }
  }

  function displayLess() {
    dots.style.display = 'inline';
    moreText.style.display = 'none';
  }
}

function slideNext() {
  let fetchResult = JSON.parse(localStorage.getItem('data'));
  const id = document.querySelector('.evt-wrapper').id;
  const evt = fetchResult.find(evt => evt.id === id);
  const evtIndex = fetchResult.indexOf(evt);
  let evtInfoMarkup = evtModalInfo(fetchResult[evtIndex + 1]);
  if (evtIndex === fetchResult.length - 1) {
    evtInfoMarkup = evtModalInfo(fetchResult[0]);
  }
  document.querySelector('.wrapper').innerHTML = evtInfoMarkup;

  addListeners();
  infoTextToggle();
  favBtnsToggle();
}

function slidePrev() {
  let fetchResult = JSON.parse(localStorage.getItem('data'));
  const id = document.querySelector('.evt-wrapper').id;
  const evt = fetchResult.find(evt => evt.id === id);
  const evtIndex = fetchResult.indexOf(evt);
  let evtInfoMarkup = evtModalInfo(fetchResult[evtIndex - 1]);

  if (evtIndex === 0) {
    evtInfoMarkup = evtModalInfo(fetchResult[fetchResult.length - 1]);
  }

  document.querySelector('.wrapper').innerHTML = evtInfoMarkup;

  addListeners();
  infoTextToggle();
  favBtnsToggle(id);
}

function showMore(e) {
  e.preventDefault();
  let fetchResult = JSON.parse(localStorage.getItem('data'));
  modal.close();
  const id = e.target.parentNode.id;
  const valueInput = fetchResult.find(e => e.id === id).name;
  getUrlValue(valueInput, '');
}

function onAddToFavCheck(e) {
  if (e.target.checked) {
    addToFav();
  } else {
    removeFromDatabase();
  }
}

function onMyFavClick() {
  getAndRenderFavList();
  modal.close();
  paginationRef.style.visibility = 'hidden';
}

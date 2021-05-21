// import { error, info } from '@pnotify/core';
import 'basiclightbox/dist/basiclightbox.min.css';
const basicLightbox = require('basiclightbox');
import evtModalTmpl from '../templates/evtModal.hbs';
import evtModalInfo from '../templates/evtModalInfo.hbs';
import favouritesTmpl from '../templates/favouritesTmpl.hbs';
import {
  eventCardRef,
  dataContainer,
  paginationRef,
  authWrapperRef,
  logoRef,
} from './refs';
import { db } from './firebaseApi';
import getUrlValue from './urlValue';
import 'firebaseui/dist/firebaseui.css';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import { runAnimationCards } from './renderingSaerchEvents';
import { emptyFavoriteList } from './authUserOnSite';
import { firstEventRender } from './renderingCards';

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

function favBtnsToggle() {
  const id = document.querySelector('.evt-wrapper').id;
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      document
        .querySelectorAll('.comment_bubble')
        .forEach(i => (i.style.display = 'none'));
      const userCollection = db.collection(`${user.uid}`).doc('fav');
      userCollection.get().then(doc => {
        if (doc.exists) {
          const favListIDs = Object.keys(doc.data());
          if (favListIDs.includes(id)) {
            document.querySelector('#favourite').checked = true;
          }
        }
      });
    } else {
      document.querySelector('#favourite').disabled = true;
      document.querySelector('.my-fav').disabled = true;
    }
  });
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
  addListeners();

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
    justRemoveFromFav();
  }
}

function justRemoveFromFav() {
  const id = document.querySelector('.evt-wrapper').id;
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      const userCollection = db.collection(`${user.uid}`).doc('fav');
      userCollection.update({
        [id]: firebase.firestore.FieldValue.delete(),
      });
    }
  });
}

function addToFav() {
  const id = document.querySelector('.evt-wrapper').id;
  let fetchResult = JSON.parse(localStorage.getItem('data'));
  const evtInfo = fetchResult.find(e => e.id === id);

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      db.collection(`${user.uid}`)
        .doc('fav')
        .set(
          {
            [id]: evtInfo,
          },
          { merge: true },
        );
      // User is signed in.
    } else {
      // No user is signed in.
    }
  });
}

function removeFromFav() {
  const id = document.querySelector('.evt-wrapper').id;
  removeFromDatabase(id);
}

function onMyFavClick() {
  getAndRenderFavList();
  modal.close();
  paginationRef.style.visibility = 'hidden';
}

function onDeleteFav(e) {
  const id = e.target.parentNode.id;
  removeFromDatabase(id);
}

function removeFromDatabase(id) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      const userCollection = db.collection(`${user.uid}`).doc('fav');
      userCollection.update({
        [id]: firebase.firestore.FieldValue.delete(),
      });
      getAndRenderFavList();
    }
  });
}

function getAndRenderFavList() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      const userCollection = db.collection(`${user.uid}`).doc('fav');
      userCollection.get().then(doc => {
        if (doc.exists) {
          dataContainer.innerHTML = favouritesTmpl(Object.values(doc.data()));
          runAnimationCards();
          document
            .querySelector('.back-btn')
            .addEventListener('click', firstEventRender);

          localStorage.setItem(
            'data',
            JSON.stringify(Object.values(doc.data())),
          );
          const deleteFavBtns = document.querySelectorAll('.delete-fav');
          deleteFavBtns.forEach(btn =>
            btn.addEventListener('click', onDeleteFav),
          );
          if (Object.keys(doc.data()).length === 0) {
            emptyFavoriteList();
          }
        } else if (!doc.exists) {
          addListeners();
          paginationRef.style.visibility = 'hidden';
          emptyFavoriteList();
        }
      });
    }
  });
}
export { onMyFavClick, onDeleteFav };


import { runAnimationCards } from './renderingSaerchEvents';
import { emptyFavoriteList } from './authUserOnSite';
import { firstEventRender } from './renderingCards';
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
// import {onDeleteFav} from './modal'


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

function removeFromDatabase(id) {
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

function onDeleteFav(e) {
  const id = e.target.parentNode.id;
  removeFromDatabase(id);
  getAndRenderFavList();
}

export { getAndRenderFavList, favBtnsToggle, removeFromDatabase, addToFav, onDeleteFav }
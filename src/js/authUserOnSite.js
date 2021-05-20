import 'firebaseui/dist/firebaseui.css';
import * as firebaseui from 'firebaseui';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import userProfileTmpl from '../templates/userProfileTmpl.hbs';
import {
  signInBtnRef,
  authContaineRef,
  authWrapperRef,
  paginationRef,
  preloader,
} from './refs';
import { db } from './firebaseApi';
import favouritesTmpl from '../templates/favouritesTmpl.hbs';
import emptyFavoriteListTmpl from '../templates/emptyFavoriteListTmpl.hbs';
import { runAnimationCards } from './renderingSaerchEvents';
import { firstEventRender } from './renderingCards';

signInBtnRef.addEventListener('click', openAuthContainer);

function openAuthContainer() {
  authContaineRef.classList.toggle('clicked');
  signInBtnRef.textContent = 'Sign in';

  if (authContaineRef.classList.contains('clicked')) {
    signInBtnRef.textContent = 'Close';
  }
}

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    // console.log(user.uid, ' user id');
    signInBtnRef.removeEventListener('click', openAuthContainer);
    openAuthContainer();
    signInBtnRef.style.display = 'none';
    authContaineRef.style.display = 'none';
    renderUserIcon(user);

    document.querySelector('.favorite-event').addEventListener('click', () => {
      const userCollection = db.collection(`${user.uid}`).doc('fav');
      userCollection.get().then(doc => {
        if (doc.exists) {
          dataContainer.innerHTML = favouritesTmpl(Object.values(doc.data()));
          runAnimationCards();
          paginationRef.style.visibility = 'hidden';
          document
            .querySelector('.back-btn')
            .addEventListener('click', firstEventRender);

          if (Object.keys(doc.data()).length === 0) {
            emptyFavoriteList();
          }
        } else if (!doc.exists) {
          paginationRef.style.visibility = 'hidden';
          emptyFavoriteList();
          console.log('No such document!');
        }
      });
    });
  }
});

function renderUserIcon(user) {
  // console.log(user);
  authWrapperRef.insertAdjacentHTML('beforeend', userProfileTmpl(user));
}

function signOutUser() {
  // console.log('sign out');
  firebase
    .auth()
    .signOut()
    .then(() => {
      document.querySelector('.user-container').style.display = 'none';
      signInBtnRef.style.display = 'flex';
      authContaineRef.style.display = 'block';
      signInBtnRef.addEventListener('click', openAuthContainer);
      location.reload();
    })
    .catch(error => {
      // An error happened.
      console.error(error);
    });
}

window.signOutUser = signOutUser;

function emptyFavoriteList() {
  dataContainer.innerHTML = emptyFavoriteListTmpl();
  document
    .querySelector('.back-btn-empty')
    .addEventListener('click', firstEventRender);
  preloader.hide();
}

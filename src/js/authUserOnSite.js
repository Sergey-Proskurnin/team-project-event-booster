import 'firebaseui/dist/firebaseui.css';
import * as firebaseui from 'firebaseui';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import userProfileTmpl from '../templates/userProfileTmpl.hbs';
import { signInBtnRef, authContaineRef, authWrapperRef } from './refs';
import { ui, uiConfig } from './firebaseApi';

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
    // console.log(user);
    signInBtnRef.removeEventListener('click', openAuthContainer);
    openAuthContainer();
    signInBtnRef.style.display = 'none';
    authContaineRef.style.display = 'none';
    renderUserIcon(user);
    // document
    //   .querySelector('.sign-out-btn')
    //   .addEventListener('click', signOutUser);
  } else {
    // No user is signed in.
  }
});

function renderUserIcon(user) {
  console.log(user);
  authWrapperRef.insertAdjacentHTML('beforeend', userProfileTmpl(user));
}

function signOutUser() {
  console.log('sign out');
  firebase
    .auth()
    .signOut()
    .then(() => {
      document.querySelector('.user-container').style.display = 'none';
      signInBtnRef.style.display = 'flex';
      authContaineRef.style.display = 'block';
      signInBtnRef.addEventListener('click', openAuthContainer);
      // ui.start('#firebaseui-auth-container', uiConfig);
    })
    .catch(error => {
      // An error happened.
    });
}

window.signOutUser = signOutUser;

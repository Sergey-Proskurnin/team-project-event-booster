import 'firebaseui/dist/firebaseui.css';
import * as firebaseui from 'firebaseui';
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAIzQMh6iy7jPmUgXvx4TAHGDOKeQiRzjI',
  authDomain: 'team-project-event-booster.firebaseapp.com',
  projectId: 'team-project-event-booster',
  storageBucket: 'team-project-event-booster.appspot.com',
  messagingSenderId: '1082073461587',
  appId: '1:1082073461587:web:927b7c4ad3a521284367a6',
  };

firebase.initializeApp(firebaseConfig);

const ui = new firebaseui.auth.AuthUI(firebase.auth());
const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult) {
      alert('Access successful. HELLO KITTY!');
      return false;
    },
    uiShown: function () {},
  },
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
  ],
  tosUrl: 'https://www.termsfeed.com/live/255b9d74-2174-485a-b58c-eb186fe5639f',
  // privacyPolicyUrl:
  //   'https://www.privacypolicies.com/live/44ccb766-aaf4-4d9b-a5b3-584ef9c0a4ed',
};

ui.start('#firebaseui-auth-container', uiConfig);

// https://team-project-event-booster.firebaseapp.com/__/auth/handler
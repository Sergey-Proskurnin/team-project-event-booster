import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './firebaseConfig';
// import { getFromDB } from './firebaseUtils';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var provider = new firebase.auth.GoogleAuthProvider();
/*
firebase
  .auth()
  .signInWithPopup(provider)
  .then(result => {
    console.log(result, 'result');
  });
  */

/*
  firebase.auth().signOut().then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
*/

firebase.auth().onAuthStateChanged(user => {
  console.log(user, 'useruseruser');

  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

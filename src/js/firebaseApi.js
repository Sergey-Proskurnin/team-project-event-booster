import 'firebaseui/dist/firebaseui.css';
import * as firebaseui from 'firebaseui';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAIzQMh6iy7jPmUgXvx4TAHGDOKeQiRzjI',
  authDomain: 'team-project-event-booster.firebaseapp.com',
  projectId: 'team-project-event-booster',
  storageBucket: 'team-project-event-booster.appspot.com',
  messagingSenderId: '1082073461587',
  appId: '1:1082073461587:web:927b7c4ad3a521284367a6',
};

firebase.initializeApp(firebaseConfig);

export const ui = new firebaseui.auth.AuthUI(firebase.auth());
export const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult) {
      // alert('Access successful. HELLO KITTY!');
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
  signInFlow: 'popup',
};

ui.start('#firebaseui-auth-container', uiConfig);

// https://team-project-event-booster.firebaseapp.com/__/auth/handler

export const db = firebase.firestore();

const docRef = db.collection('users').doc('BhuqyaszFAsfqQgXM17b');

docRef
  .get()
  .then(doc => {
    if (doc.exists) {
      console.log('Document data:', doc.data());
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
  })
  .catch(error => {
    console.log('Error getting document:', error);
  });

// console.log(db.collection('users').get().then((doc)=>doc.data));

// db.collection("users").add({
//   first: "Ada",
//   last: "Lovelace",
//   born: 1815
// })
// .then((docRef) => {
//   console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//   console.error("Error adding document: ", error);
// });

// console.log(db.collection('users'));

// db.collection("users").add({
//   first: "Alan",
//   middle: "Mathison",
//   last: "Turing",
//   born: 1912
// })
// .then((docRef) => {
//   console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//   console.error("Error adding document: ", error);
// });

// db.collection("users").get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//       console.log(doc.data());
//   });
// });

const user = firebase.auth().currentUser;
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log('firebase :', user.uid);
    return user.uid;
    // User is signed in.
  } else {
    // No user is signed in.
  }
});

console.log(user);

export { user };

import 'basiclightbox/dist/basiclightbox.min.css';
const basicLightbox = require('basiclightbox');
import evtModalTmpl from '../templates/evtModal.hbs';
import evtModalInfo from '../templates/evtModalInfo.hbs';
import { eventCardRef, dataContainer } from './refs';
import { db } from './firebaseApi';
import getUrlValue from './urlValue';
import et from '../templates/favTmpl.hbs';
console.log(et());
import 'firebaseui/dist/firebaseui.css';
import * as firebaseui from 'firebaseui';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import { data } from 'jquery';

let modal = basicLightbox;

eventCardRef.addEventListener('click', onCardClick);

function onCardClick(e) {
  let fetchResult = JSON.parse(localStorage.getItem('data'));
  if (
    e.target.classList.contains('event-image') ||
    e.target.classList.contains('event-title')
  ) {
    const id = e.target.parentNode.id;

    // console.log('i need this id', id);

    const evtInfo = fetchResult.find(evt => evt.id === id);
    //  console.log(evtInfo);
    const evtInfoMarkup = evtModalTmpl(evtInfo);
    openModal(evtInfoMarkup);
    infoTextToggle();
    onLoadMoreModalBtn();
    document.querySelector('.btn.next').addEventListener('click', slideNext);
    document.querySelector('.btn.prev').addEventListener('click', slidePrev);
  }
}

function openModal(markupInfo) {
  modal = basicLightbox.create(`${markupInfo}`, {
    onShow: modal => {
      document.body.style.overflow = 'hidden';
      modal.element().querySelector('.close-modal').onclick = modal.close;
      document.addEventListener('keyup', closeOnEsc);
    },
    onClose: modal => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keyup', closeOnEsc);
    },
  });
  modal.show();

  function closeOnEsc(e) {
    if (e.key === 'Escape') {
      modal.close();
    }
  }

  const addBtn = document.querySelector('#favourite');
  const myFav = document.querySelector('.my-fav')
  addBtn.addEventListener('change', onAddToFavCheck);
  myFav.addEventListener('click', onMyFavClick)
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
  const addBtn = document.querySelector('#favourite');
  let evtInfoMarkup = evtModalInfo(fetchResult[evtIndex + 1]);
  if (evtIndex === fetchResult.length - 1) {
    evtInfoMarkup = evtModalInfo(fetchResult[0]);
  }
  document.querySelector('.wrapper').innerHTML = evtInfoMarkup;
  document.querySelector('.btn.next').addEventListener('click', slideNext);
  document.querySelector('.btn.prev').addEventListener('click', slidePrev);
  addBtn.addEventListener('change', onAddToFavCheck);
  onLoadMoreModalBtn();
  infoTextToggle();
}

function slidePrev() {
  let fetchResult = JSON.parse(localStorage.getItem('data'));
  const id = document.querySelector('.evt-wrapper').id;
  const evt = fetchResult.find(evt => evt.id === id);
  const evtIndex = fetchResult.indexOf(evt);
  const addBtn = document.querySelector('#favourite');
  let evtInfoMarkup = evtModalInfo(fetchResult[evtIndex - 1]);

  if (evtIndex === 0) {
    evtInfoMarkup = evtModalInfo(fetchResult[fetchResult.length - 1]);
  }

  document.querySelector('.wrapper').innerHTML = evtInfoMarkup;
  document.querySelector('.btn.next').addEventListener('click', slideNext);
  document.querySelector('.btn.prev').addEventListener('click', slidePrev);
  addBtn.addEventListener('change', onAddToFavCheck);
  onLoadMoreModalBtn();
  infoTextToggle();
}

function onLoadMoreModalBtn() {
  const loadMoreBtn = document.querySelector('.more-info');
  if (document.contains(loadMoreBtn)) {
    loadMoreBtn.addEventListener('click', showMore);
  }
}

function showMore(e) {
  e.preventDefault();
  let fetchResult = JSON.parse(localStorage.getItem('data'));
  modal.close();
  // document.body.style.overflow = 'auto';
  const id = e.target.parentNode.id;
  const valueInput = fetchResult.find(e => e.id === id).name;
  getUrlValue(valueInput, '');
}

function onAddToFavCheck(e) {
  console.log('btn');
  if (e.target.checked) {
    console.log('attr checked');
    addToFav(e);
  }else {
    console.log('attr not checked');
    removeFromFav()
  }

}
function addToFav(e) {
  const id = document.querySelector('.evt-wrapper').id;
  let fetchResult = JSON.parse(localStorage.getItem('data'));
  const evtInfo = fetchResult.find(e => e.id === id);
  const user = firebase.auth().currentUser;
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log('modal', user.uid);
      db.collection(`${user.uid}`).doc('fav').set({
        [id]: evtInfo,
      },{merge: true});
      // User is signed in.
    } else {
      // No user is signed in.
    }
  });
}

function removeFromFav() {
    const id = document.querySelector('.evt-wrapper').id;
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log('modal', user.uid);
        const userCollection = db.collection(`${user.uid}`).doc('fav')
        const removeEvt = userCollection.update({
          [id]: firebase.firestore.FieldValue.delete()
      });
       
        // User is signed in.
      } else {
        // No user is signed in.
      }

    })
  }

  function onMyFavClick(){

    let favList =[]
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
       const userCollection = db.collection(`${user.uid}`).doc('fav')
       userCollection.get().then((doc)=>{
        if (doc.exists) {
          favList.push(...Object.values(doc.data()));
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
     }
    })

    modal.close()
    console.log(favList);
    console.log(eventsTmpl(favList));
    dataContainer.innerHTML = eventsTmpl(favList)
}
    
  // db.collection("users").doc(`${us}`).set({
  //   // user: 'user.uid',

  // })
  // .then((docRef) => {
  //   // console.log("Document written with ID: ", docRef.id);
  // })
  // .catch((error) => {
  //   // console.error("Error adding document: ", error);
  // });

  // const docRef = db.collection("users");

  // docRef.get().then((doc) => {
  //     if (doc.exists) {
  //         console.log("Document data:", doc.data());
  //     } else {
  //         // doc.data() will be undefined in this case
  //         console.log("No such document!");
  //     }
  // }).catch((error) => {
  //     console.log("Error getting document:", error);
  // });

  // db.collection("users").get().then(
  //   (querySnapshot) => {
  //     console.log('show me db',querySnapshot)

  //   // console.log(querySnapshot(doc=>doc.data()));
  //   // querySnapshot.forEach((doc) => {
  //   //     console.log(doc.data());
  //   // });
  // }
  // );


//====================================================================Import-trush===================================
// import './js/apiService';
// import NewApiService from './js/apiService';
// import apiService from './js/apiService';
// import eventsCardTmpl from './templates/eventsCardTmpl.hbs';
//=========================================================================================================================
// // import './styles.css';
// // import './sass/utils/variables.scss'
// import './js/scrollUp';
// import './js/team-modal';
// import preloaderFactory from './js/preloader';

// import 'material-design-icons/iconfont/material-icons.css';
// import './sass/main.scss';
// import './sass/components/_pagination.scss';
// // import './js/apiService';
// import './js/renderEventCards';
// import './js/renderOptionSelect';
// // import './js/test';

// // import apiService from './js/apiService';
// import pagination from 'paginationjs';
// import eventsCardTmpl from './templates/eventsCardTmpl.hbs';
// import eventsCardTmplCopy from './templates/eventsCardTmpl_copy.hbs';
// import './js/modal';
// import chooseLazyLoad from './js/lazy-load';

// import { dataForEach, onParametersDataBase } from './js/onParametersDataBase';
// // import { resultGallery } from './js/test'
// import { info } from '@pnotify/core';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';

// // console.log(resultGallery);

// // function worldEvents() {
// //   fetch(
// //     'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&sort=random&apikey=k4ZuaibW7VaW2DqWiJtNRmwq3dAdRpv6',
// //   )
// //     .then(resp => resp.json())
// //     .then(data => {
// //       const { events } = data._embedded;
// //       const markup = eventsCardTmpl(events);
// //       refs.dataContainer.insertAdjacentHTML('beforeend', markup);
// //     });
// // }

// // worldEvents();

// const refs = {
//   searchForm: document.querySelector('.form-submit'),
//   searchInput: document.querySelector('.input'),
//   select: document.querySelector('.select'),
//   dataContainer: document.querySelector('#dataContainer'),
// };

// const preloader = preloaderFactory('#preloader');

// // let fetchResult = [];
// // localStorage.setItem('data', JSON.stringify(fetchResult));
// // export { fetchResult };

// // countryCode = ${refs.select.value}
// refs.searchForm.addEventListener('submit', onSubmitForm);

// function onSubmitForm(e) {
//   e.preventDefault();
//   preloader.show();
//   refs.dataContainer.innerHTML = '';
//   const valueInput = e.target.elements[0].value;
//   const valueSelect = e.target.nextElementSibling[0].value;
//   getData(valueSelect, valueInput);
// }


//   function getData (valueSelect, valueInput) {
//     $('#demo').pagination({
//     dataSource: `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${valueInput}&size=24&sort=random&countryCode=${valueSelect}&apikey=k4ZuaibW7VaW2DqWiJtNRmwq3dAdRpv6`,
//     locator: '_embedded.events',
//       totalNumberLocator: function (response) {
//         console.log(response);
       
//         return response.page.totalPages;        },
    
//       pageSize: 24,
    
// // ajax: {
// //         beforeSend: function() {
// //             dataContainer.html('Loading data from flickr.com ...');
// //         }
// //       },
//     callback: function (data, pagination) {
//         console.log(data);
//         // console.log(dataParameters);
//         $('#dataContainer').html(eventsCardTmpl(data));
//         preloader.hide()
//         //  window.scrollTo({
//         //   top: -100,
//         //   behavior: 'smooth',
//         // });
//       },

// // callback: function(data, pagination) {
// //         // template method of yourself
// //         var html = template(data);
// //         dataContainer.html(html);
// //       },
    
//       // dataSource: function (done) {


//       //   $.ajax({
//       //     type: 'GET',
//       //     url: `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${valueInput}&sort=random&size=200&countryCode=${valueSelect}&apikey=k4ZuaibW7VaW2DqWiJtNRmwq3dAdRpv6`,
          
//       //     success: function (data) {
            

            
//       //       console.log(data);

//       //       if ('_embedded' in data) {
//       //       // const dataParameters = onParametersDataBase(data);
//       //       // console.log(dataParameters);
//       //       // dataForEach(data);
//       //       // console.log(data);
//       //       const dataParameters = onParametersDataBase(data);
            
//       //       done(dataParameters);
//       //       console.log(dataParameters);
//       //       localStorage.clear()
//       //       localStorage.setItem('data', JSON.stringify(dataParameters));
//       //       // fetchResult = [];
//       //       // fetchResult.push(...dataParameters);
//       //       // localStorage.setItem('data', JSON.stringify(fetchResult));
//       //       preloader.hide();
//       //       } else {
//       //        info({
//       //       text: 'No events in this country!',
//       //         delay: 2000,
//       //     })
//       //         }


//       //       refs.searchInput.value = '';
//       //     },
//       //   });
//       // },

//       // pageSize: 24,

//       showPrevious: false,
//       showNext: false,
//       // callback: function (dataParameters) {
//       //   // console.log(data);
//       //   console.log(dataParameters);
//       //   $('#dataContainer').html(eventsCardTmplCopy(dataParameters));
        
//       //   const totalScrollHeight = refs.searchInput.clientHeight;
//       //   window.scrollTo({
//       //     top: -100,
//       //     behavior: 'smooth',
//       //   });
//       // },
//     });
//   }


// /**Rendering first events */
// function firstEventRender() {
//   getData('', '');
// }
// /** Первый рендеринг и ленивка уйдет в модуль  как только будет фетч*/
// firstEventRender();
// chooseLazyLoad();

// export function onLoadMoreModalBtn() {
//   const loadMoreBtn = document.querySelector('.more-info');
//   if (document.contains(loadMoreBtn)) {
//     loadMoreBtn.addEventListener('click', showMore);
//   }
// }

// function showMore(e) {
//   e.preventDefault();
//   let fetchResult = JSON.parse(localStorage.getItem('data'))
//   const modal = document.querySelector('.basicLightbox');
//   modal.remove();

//   document.body.style.overflow = 'auto';
//   const id = e.target.parentNode.id;
//   const valueInput = fetchResult.find(e => e.id === id).name;
//   ApiService.getData(' ', valueInput);
// }



//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
// // import './styles.css';
// // import './sass/utils/variables.scss'
// import './js/scrollUp';
// import './js/team-modal';
// import preloaderFactory from './js/preloader';

// import 'material-design-icons/iconfont/material-icons.css';
// import './sass/main.scss';
// import './sass/components/_pagination.scss';
// // import './js/apiService';
// import './js/renderEventCards';
// import './js/renderOptionSelect';
// // import './js/test';

// // import apiService from './js/apiService';
// import pagination from 'paginationjs';
// import eventsCardTmpl from './templates/eventsCardTmpl.hbs';
// import eventsCardTmplCopy from './templates/eventsCardTmpl_copy.hbs';
// import './js/modal';
// import chooseLazyLoad from './js/lazy-load';

// import { dataForEach, onParametersDataBase } from './js/onParametersDataBase';
// // import { resultGallery } from './js/test'
// import { info } from '@pnotify/core';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';

// // console.log(resultGallery);

// // function worldEvents() {
// //   fetch(
// //     'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&sort=random&apikey=k4ZuaibW7VaW2DqWiJtNRmwq3dAdRpv6',
// //   )
// //     .then(resp => resp.json())
// //     .then(data => {
// //       const { events } = data._embedded;
// //       const markup = eventsCardTmpl(events);
// //       refs.dataContainer.insertAdjacentHTML('beforeend', markup);
// //     });
// // }

// // worldEvents();

// const refs = {
//   searchForm: document.querySelector('.form-submit'),
//   searchInput: document.querySelector('.input'),
//   select: document.querySelector('.select'),
//   dataContainer: document.querySelector('#dataContainer'),
// };

// const preloader = preloaderFactory('#preloader');

// // let fetchResult = [];
// // localStorage.setItem('data', JSON.stringify(fetchResult));
// // export { fetchResult };

// // countryCode = ${refs.select.value}
// refs.searchForm.addEventListener('submit', onSubmitForm);

// function onSubmitForm(e) {
//   e.preventDefault();
//   preloader.show();
//   refs.dataContainer.innerHTML = '';
//   const valueInput = e.target.elements[0].value;
//   const valueSelect = e.target.nextElementSibling[0].value;
//   ApiService.getData(valueSelect, valueInput);
// }

// class ApiService {
//   static getData(valueSelect, valueInput) {
//     $('#demo').pagination({
//       dataSource: function (done) {
        
//         $.ajax({
//           type: 'GET',
//           url: `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${valueInput}&sort=random&size=200&countryCode=${valueSelect}&apikey=k4ZuaibW7VaW2DqWiJtNRmwq3dAdRpv6`,
//           totalNumberLocator: function(response) {
//         // you can return totalNumber by analyzing response content
//         return console.log(Math.floor(Math.random() * (1000 - 100)) + 100); 
//     },
//           success: function (data) {
            

            
//             console.log(data);

//             if ('_embedded' in data) {
//             // const dataParameters = onParametersDataBase(data);
//             // console.log(dataParameters);
//             // dataForEach(data);
//             // console.log(data);
//             const dataParameters = onParametersDataBase(data);
            
//             done(dataParameters);
//             console.log(dataParameters);
//             localStorage.clear()
//             localStorage.setItem('data', JSON.stringify(dataParameters));
//             // fetchResult = [];
//             // fetchResult.push(...dataParameters);
//             // localStorage.setItem('data', JSON.stringify(fetchResult));
//             preloader.hide();
//             } else {
//              info({
//             text: 'No events in this country!',
//               delay: 2000,
//           })
//               }


//             refs.searchInput.value = '';
//           },
//         });
//       },

//       pageSize: 24,
//       showPrevious: false,
//       showNext: false,
//       callback: function (dataParameters) {
//         // console.log(data);
//         console.log(dataParameters);
//         $('#dataContainer').html(eventsCardTmplCopy(dataParameters));
        
//         const totalScrollHeight = refs.searchInput.clientHeight;
//         window.scrollTo({
//           top: -100,
//           behavior: 'smooth',
//         });
//       },
//     });
//   }
// }

// /**Rendering first events */
// function firstEventRender() {
//   ApiService.getData('', '');
// }
// /** Первый рендеринг и ленивка уйдет в модуль  как только будет фетч*/
// firstEventRender();
// chooseLazyLoad();

// export function onLoadMoreModalBtn() {
//   const loadMoreBtn = document.querySelector('.more-info');
//   if (document.contains(loadMoreBtn)) {
//     loadMoreBtn.addEventListener('click', showMore);
//   }
// }

// function showMore(e) {
//   e.preventDefault();
//   let fetchResult = JSON.parse(localStorage.getItem('data'))
//   const modal = document.querySelector('.basicLightbox');
//   modal.remove();

//   document.body.style.overflow = 'auto';
//   const id = e.target.parentNode.id;
//   const valueInput = fetchResult.find(e => e.id === id).name;
//   ApiService.getData(' ', valueInput);
// }


//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
// $.ajax({
      //   success: function (data) {
      //       // done(data)
      //      console.log(data);
      //     const dataParameters = onParametersDataBase(JSON.parse(data));
      //     localStorage.clear();
      //     localStorage.setItem('data', JSON.stringify(dataParameters));
      //     $('#dataContainer').html(eventsCardTmplCopy(dataParameters));
      //     preloader.hide();
      //     window.scrollTo({
      //       top: -100,
      //       behavior: 'smooth',
      //     });
      //   },

      //   beforeSend: function () {
      //     info({
      //       text: 'No events in this country!',
      //       delay: 2000,
      //     });
      //   },
      // });
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// console.log(resultGallery);

// function worldEvents() {
//   fetch(
//     'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&sort=random&apikey=k4ZuaibW7VaW2DqWiJtNRmwq3dAdRpv6',
//   )
//     .then(resp => resp.json())
//     .then(data => {
//       const { events } = data._embedded;
//       const markup = eventsCardTmpl(events);
//       refs.dataContainer.insertAdjacentHTML('beforeend', markup);
//     });
// }

// worldEvents();

//======================================================================================================================
//======================================================================================================================
//======================================================================================================================
// let fetchResult = [];
// localStorage.setItem('data', JSON.stringify(fetchResult));
// export { fetchResult };

// countryCode = ${refs.select.value}

//====================================================firebase======================================================================
//// import firebase from 'firebase/app';
// import 'firebase/auth';
// import * as firebaseui from 'firebaseui';
// import { firebaseConfig } from './firebaseConfig';
// // import { getFromDB } from './firebaseUtils';

// // Initialize Firebase
// const ui = new firebaseui.auth.AuthUI(firebase.auth())
// ui.start('#firebaseui-auth-container', uiConfig);

// firebase.initializeApp(firebaseConfig);

// var provider = new firebase.auth.GoogleAuthProvider();
// /*
// firebase
//   .auth()
//   .signInWithPopup(provider)
//   .then(result => {
//     console.log(result, 'result');
//   });
//   */

// /*
//   firebase.auth().signOut().then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });
// */

// firebase.auth().onAuthStateChanged(user => {
//   console.log(user, 'useruseruser');

//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     var uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });
// =================================================================================================================================================
// import 'firebaseui/dist/firebaseui.css';
// import 'firebase/app';
// import 'firebase/auth';

// // Your web app's Firebase configuration
// export const firebaseConfig = {
//   apiKey: 'AIzaSyAIzQMh6iy7jPmUgXvx4TAHGDOKeQiRzjI',
//   authDomain: 'team-project-event-booster.firebaseapp.com',
//   projectId: 'team-project-event-booster',
//   storageBucket: 'team-project-event-booster.appspot.com',
//   messagingSenderId: '1082073461587',
//   appId: '1:1082073461587:web:927b7c4ad3a521284367a6',
// };
//=========================================================================================================================
/**Sort imgs and break into pieces info on data */
// function dataForEach(array) {
//   array._embedded.events.forEach(i => {
//     i.images.sort((a, b) => a.width - b.width);
//     if (i.info) {
//       i.info = [i.info.substr(0, 60), i.info.substr(60)];
//     }
//   });
// }
//==========================================renderEventCards================================================================
// import NewApiService from './apiService';
// import eventsCardTmpl from '../templates/eventsCardTmpl.hbs';
// import ApiService from '../index';
// import pagination from 'paginationjs';

// const startPageApi = new ApiService();
// const eventCardsRef = document.querySelector('#dataContainer');
// console.log(startPageApi);

// const apiService = new NewApiService();
// const inputSearch = document.querySelector('.form-submit');

// export let resultGallery = [];
// // console.dir(inputSearch);
// inputSearch.addEventListener('submit', onSearch);

// async function onSearch(e) {
//   e.preventDefault();
//   // console.log(e.target.elements);
//   eventCardsRef.innerHTML = '';
//   const valueInput = e.target.elements[0].value;
//   const valueSelect = e.target.nextElementSibling[0].value;
//   console.dir(e.target);

//   //   apiService.query = [valueInput, valueSelect];
//   //   console.log(apiService.query);

//   const galleryArray = await apiService.fetchApi();
//   resultGallery.push(...galleryArray);

//   const markup = await appendEventMarkup(galleryArray);
//   return markup;
// }

// //   const markup = await appendEventMarkup(galleryArray);
// //   return markup;
// // }

// function appendEventMarkup(events) {
//   eventCardsRef.insertAdjacentHTML('beforeend', eventsCardTmpl(events));
// }

// // export { resultGallery }
// // console.log(resultGallery);
// ================================================gsup for Yevgeniy=========================================================
// const mouse = document.querySelector('.mouse');
// const links = document.querySelectorAll('a');
// const main = document.querySelector('.main');

// function moveMouse(e) {
//   if (e.clientX < 5 || e.clientY < 5 || e.clientY > (window.innerHeight - 5) || e.clientX > (window.innerWidth - 5)) {
//     mouse.style.opacity = 0;
//   } else {
//     mouse.style.opacity = 1;
//     mouse.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
//   }
// };

// if (window.innerWidth >= 728) {
//   document.addEventListener('mousemove', moveMouse);

//   links.forEach(link => link.addEventListener('mouseover', () => { mouse.classList.add('links-visible') }));
//   links.forEach(link => link.addEventListener('mouseleave', () => { mouse.classList.remove('links-visible') }));

//   main.addEventListener('mouseover', () => { mouse.classList.add('view-visible') });
//   main.addEventListener('mouseleave', () => { mouse.classList.remove('view-visible') });

  
// }
//===========================================Geolocation=====================================================================
// // import refs from './refs';
// import { Loader } from "@googlemaps/js-api-loader"

// // const geoModal = document.querySelector('.js-geolocation-modal');
// // const geoModalBackdrop = document.querySelector('.js-geolocation-backdrop');

// let map;
// let marker;
// const onLocationOnCardClick = e => {
//   if (!e.target.classList.contains('js-geolocation-btn')) {
//     return
//   }
// const loader = new Loader({
//   apiKey: "AIzaSyC2LapXJkglr9CJpAo3W8DHmsnivv69nDQ",
// });
// loader.load().then(() => {
//   const latLng = {
//     lat: +e.target.dataset.latitude,
//     lng: +e.target.dataset.longitude
//   }
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: latLng,
//     zoom: 15,
//   });
//   marker = new google.maps.Marker({
//     position: latLng,
//     title:"Start!!!"
//   });
//   marker.setMap(map);
// });
//   geoModalBackdrop.classList.remove('is-hidden')
// }


// const onGeoModalClick = e => {
 
//   if (e.target.classList.contains('js-geolocation-backdrop')) {
   
//     geoModalBackdrop.classList.add('is-hidden')
//   } else {
//     return
//   }
// }
// const onCloseGeoModalByEscKeydown = e => {
// if (e.code === 'Escape') {
//      geoModalBackdrop.classList.add('is-hidden')
//   }
// }


// window.addEventListener('keydown', onCloseGeoModalByEscKeydown);
// geoModalBackdrop.addEventListener('click', onGeoModalClick);
// gallery.addEventListener('click', onLocationOnCardClick  )
// /==========================================apiService=====================================================================
// const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';
// const API_KEY = 'k4ZuaibW7VaW2DqWiJtNRmwq3dAdRpv6';

// export default class NewApiService {
//   constructor() {
//     this.searchCountry = '';
//     this.searchQuery = '';
//     this.numberPage = 1;
//   }
//   async fetchApi() {
//     const searchParams = new URLSearchParams({
//       keyword: this.searchQuery,
//       // source: 'universe',
//       countryCode: this.searchCountry,
//       page: this.numberPage,
//       size: 24,
//       apikey: API_KEY,
//     });
//     const url = `${BASE_URL}?${searchParams}`;
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(console.log('Error'));
//       }
//       return await response;
//     // const { _embedded } = await response.json();
//     // // if (hits.length === 0 && this.numberPage === 1) {
//     // //   return 'error';
//     // // }
//     // this.incrementPage();
//     // const card = _embedded.events;
//     // return await card;
//   }
//   incrementPage() {
//     this.numberPage += 1;
//   }
//   resetPage() {
//     this.numberPage = 1;
//   }
//   get query() {
//     return [this.searchQuery, this.searchCountry];
//   }

//   set query(newQueryArray) {
//     this.searchQuery = newQueryArray[0];
//     this.searchCountry = newQueryArray[newQueryArray.length - 1];
//   }
// }
// const inputSearch = document.querySelector('.form-submit')
// console.log(inputSearch);
// inputSearch.addEventListener('submit', onSearch)

// const galleryApiService = new NewApiService();
// galleryApiService.query = 'eagles'
// console.log(galleryApiService);

// async function onSearch(e){
//     e.preventDefault();
//     const galleryArrey = await galleryApiService.fetchApi();
//       return galleryArrey;
// }

// onSearch()
//===========================================================firebaseApi=============================================================
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

//================================================userFirebase================================================================
// const user = firebase.auth().currentUser;
// firebase.auth().onAuthStateChanged(function (user) {
//   if (user) {
//     console.log('firebase :', user.uid);
//     return user.uid;
//     // User is signed in.
//   } else {
//     // No user is signed in.
//   }
// });

// console.log(user);

// export { user };
//=========================================================FirebaseApi.js=================================================
// const docRef = db.collection('users').doc('BhuqyaszFAsfqQgXM17b');
// docRef
//   .get()
//   .then(doc => {
//     if (doc.exists) {
//       console.log('Document data:', doc.data());
//     } else {
//       // doc.data() will be undefined in this case
//       console.log('No such document!');
//     }
//   })
//   .catch(error => {
//     console.log('Error getting document:', error);
//   });
//=====================================================================eventCardTmplcopy===================================================
// {{!-- {{#each this}}
// <li class="event-card" id={{id}}>
//     <img class="event-image lazyload" 
//     loading="lazy"
//     srcset="
//         {{images1x128}} 128w,
//         {{images2x128}} 128w,
//         {{images1x180}} 180w,
//         {{images2x180}} 180w
//       " 
//       data-src={{images1x180}} alt="{{name}}" />
//     <h3 class="event-title">{{name}}</h3>
//     <p class="event-date">{{dates}}</p>
//     <p class="event-place">
//         {{#if locationLatitude}}
//             <a href="https://maps.google.com?saddr=Current+Location&daddr={{locationLatitude}},{{locationLongitude}}"
//             target="_blank">
//                 <span class="material-icons md-12 cards-icons">room</span>
//                 {{#if venuesName}}
//                     {{venuesName}},
//                 {{/if}}
//                 {{#if city}}
//                     {{city}}
//                         {{else}}
//                             Online
//                 {{/if}}
//             </a>
//         {{else}}
//             <a href="hhttps://www.google.com/maps/dir/?api=1&{{city}}"
//             target="_blank">
//                 <span class="material-icons md-12 cards-icons">room</span>
//                 {{#if venuesName}}
//                     {{venuesName}},
//                 {{/if}}
//                 {{#if city}}
//                     {{city}}
//                         {{else}}
//                             Online
//                 {{/if}}
//             </a>
//         {{/if}}
//     </p>
// </li>
// {{/each}} --}}
//==================================================tplGeoModal==============================================================================
// {{!-- <div width="560" height="315">
//     {{#if locationLatitude}}
//         <iframe src="https://maps.google.com?saddr=Current+Location&daddr={{this.locationLatitude}},
//     {{this.locationLongitude}}&output=embed" width="560" height="315" frameborder="0"></iframe>
//         {{else}}
//     <iframe src="https://www.google.com/search?q={{this.city}},&output=embed" width="560" height="315" frameborder="0"></iframe>
    
//     {{/if}}
// </div> --}}
//================================================================_mouse.scss===============================================================
// .mouse {
//   position: fixed;
//   left: 0;
//   top: 0;
//   width: 35px;
//   height: 35px;
//   border-radius: 100%;
//   z-index: 99999;
//   pointer-events: none;

//   &::before {
//     content: '';
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     width: 15px;
//     height: 15px;
//     border-radius: 100%;
//     z-index: 2;
//     transition: opacity 1s ease-in-out;
//   }

//   &::after {
//     content: '';
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     width: 25px;
//     height: 25px;
//     border-radius: 100%;
//     background: transparent;
//     border: 4px solid $accent-color;
//     transition: opacity 1s ease-in-out;
//   }

//   & .mouse__view {
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     width: 35px;
//     height: 35px;
//     z-index: 999999;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 8px;
//     line-height: 8px;
//     letter-spacing: 1px;
//     text-transform: uppercase;
//     color: #fff;
//     background-color: $accent-color;
//     border-radius: 100%;
//     opacity: 0;
//     transition: opacity 1s ease-in-out;
//   }
// }

// .view-visible .mouse__view {
//   opacity: 1;
//   transition: opacity 1s ease-in-out;
// }

// .links-visible::after {
//   border: 4px solid $accent-color;
//   transform: translate(-50%, -50%) scale(0.5);
//   background-color: transparent;
//   transition: 1s;
// }

// .links-visible::before {
//   opacity: 0;
// }
//=============================================================================apiPaginationService.js===========================================
// const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';
// const API_KEY = 'k4ZuaibW7VaW2DqWiJtNRmwq3dAdRpv6';

// export default class FethApiPaginationService {
//   constructor( render ) {
//     this.searchCountry = '';
//     this.searchQuery = '';
//     this.render = render
//   }
//   getParamsApi() {
//     const searchParams = new URLSearchParams({
//       keyword: this.searchQuery,
//       sort: 'random',
//       countryCode: this.searchCountry,
//       size: 24,
//     });
//     const paramsUrl = `${searchParams}`;
//     return paramsUrl;
//   }
//   getData() {
//     $('#demo').pagination({
//       dataSource: `${BASE_URL}?${this.getParamsApi()}&apikey=${API_KEY}`,
//       formatAjaxError: function (jqXHR, textStatus, errorThrown) {
//         this.onError();
//       },
//       totalNumberLocator: function (response) {
//         if (response.page.totalPages === 0) {
//           this.onInfoBadSearch();
//           console.log(response);
//           return;
//         }
//         return response.page.totalPages;
//       },
//       locator: '_embedded.events',
//       pageSize: 24,

//       callback: function (data) {
//         return data
//       },
//       showPrevious: false,
//       showNext: false,
//     });
//     // searchInput.value = '';
//   }

//   get query() {
//     return [this.searchQuery, this.searchCountry];
//   }

//   set query(newQueryArray) {
//     this.searchQuery = newQueryArray[0];
//     this.searchCountry = newQueryArray[newQueryArray.length - 1];
//   }
//   onError() {
//     error({
//       text: 'Error 404! Bad URL.',
//       delay: 3000,
//     });
//   }
//   onInfoBadSearch() {
//     dataContainer.innerHTML =
//       '<img class="imageNotfication" src = "https://cdn.pixabay.com/photo/2015/03/08/17/25/musician-664432_150.jpg"  ><h2 class="notification">"Sorry, no events in this country!"</h2> ';
//     preloader.hide();
//   }
// }
//===========================================================================link-favicon-header=============================================
// <!-- <link
//       rel="icon"
//       type="image/png"
//       href="https://img-premium.flaticon.com/png/512/1545/1545906.png?token=exp=1620997586~hmac=88ed6a01f490c7e129a563b3ecab07ee"
//     /> -->
//     <!-- <link
//       rel="icon"
//       type="image/png"
//       href="https://img-premium.flaticon.com/png/512/1545/1545927.png?token=exp=1620997627~hmac=0243765cc8dc877dad95d08a76350010"
//     /> -->
//==========================================================script-data-base=====================================
// <!-- <script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js"></script> -->






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
//========================================================================================================================
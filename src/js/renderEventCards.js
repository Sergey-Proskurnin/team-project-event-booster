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

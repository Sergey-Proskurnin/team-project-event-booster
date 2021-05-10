// import NewApiService from './apiService';
// import eventsCardTmpl from '../templates/eventsCardTmpl.hbs';

// const apiService = new NewApiService();
// const inputSearch = document.querySelector('.form-submit');
// const eventCardsRef = document.querySelector('.event-cards');
// export let resultGallery = [];

// inputSearch.addEventListener('submit', onSearch);

// async function onSearch(e) {
//   e.preventDefault();
//   eventCardsRef.innerHTML = '';
//   const valueInput = e.target.elements[0].value;
//   const valueSelect = e.target.elements[2].value;

//   apiService.query = [valueInput, valueSelect];
//   console.log(apiService.query);

//   const galleryArray = await apiService.fetchApi();
//   resultGallery.push(...galleryArray);

//   const markup = await appendEventMarkup(galleryArray);
//   return markup;
// }

// function renderEventCards() {
//   return apiService.fetchApi().then(appendEventMarkup);
// }

// function appendEventMarkup(events) {
//   eventCardsRef.insertAdjacentHTML('beforeend', eventsCardTmpl(events));
// }

// renderEventCards();

// // export { resultGallery }
// // console.log(resultGallery);

const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';
const API_KEY = 'k4ZuaibW7VaW2DqWiJtNRmwq3dAdRpv6';

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

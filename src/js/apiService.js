const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';
const API_KEY = 'k4ZuaibW7VaW2DqWiJtNRmwq3dAdRpv6';

class NewApiService {
  constructor() {
    this.searchQuery = '';
    this.numberPage = 1;
     }
  async fetchApi() {
    const searchParams = new URLSearchParams({
      keyWord: this.searchQuery,
      source: 'universe',
      countryCode: 'US',
      page: this.numberPage,
      size: 20,
      apikey: API_KEY,
    });
    const url = `${BASE_URL}?${searchParams}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(console.log('Error'));
    }
    const { _embedded } = await response.json();
    // if (hits.length === 0 && this.numberPage === 1) {
    //   return 'error';
    // }
    this.incrementPage();
    console.log(_embedded.events);
    return await _embedded.events;
  }
  incrementPage() {
    this.numberPage += 1;
  }
  resetPage() {
    this.numberPage = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
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


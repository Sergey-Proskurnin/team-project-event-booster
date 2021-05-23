export default class NewApiService {
  constructor() {
    this.searchCountry = '';
    this.searchQuery = '';
  }
  fetchApi() {
    const searchParams = new URLSearchParams({
      keyword: this.searchQuery,
      // sort: 'random',
      countryCode: this.searchCountry,
    });
    const url = `${searchParams}`;
    return url;
  }
  get query() {
    return [this.searchQuery, this.searchCountry];
  }

  set query(newQueryArray) {
    this.searchQuery = newQueryArray[0];
    this.searchCountry = newQueryArray[newQueryArray.length - 1];
  }
}

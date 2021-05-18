export default class NewApiService {
  constructor() {
    this.searchCountry = '';
    this.searchQuery = '';
    this.numberPage = 1;
  }
  fetchApi() {
    const searchParams = new URLSearchParams({
      keyword: this.searchQuery,
      sort: 'random',
      countryCode: this.searchCountry,
      size: 24,
      pageSize: 24,
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

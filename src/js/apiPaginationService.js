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

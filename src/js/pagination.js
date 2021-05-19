import { error, info } from '@pnotify/core';
import { searchInput, preloader, BASE_URL, API_KEY } from './refs';
import { onRenderingSearchEvents } from './renderingSaerchEvents';

function getData(url) {
  $('#demo').pagination({
    dataSource: `${BASE_URL}?${url}&apikey=${API_KEY}`,
    formatAjaxError: function (jqXHR, textStatus, errorThrown) {
      onError();
    },
    totalNumberLocator: function (response) {
      if (response.page.totalPages === 0) {
        onInfoBadSearch();
        return;
      }
      return response.page.totalPages;
    },
    locator: '_embedded.events',
    callback: function (data) {
      onRenderingSearchEvents(data, '#dataContainer');
    },
    showPrevious: false,
    showNext: false,
  });
  searchInput.value = '';
}

// /**Function - callback pnotify */
function onError() {
  dataContainer.innerHTML =
    '<img class="imageNotfication" src = "https://cdn.pixabay.com/photo/2017/09/01/00/16/png-2702697_150.png"  ><h2 class="notification">"Oh no, this is bad URL. Please, try again"</h2> ';
  preloader.hide();
}
function onInfoBadSearch() {
  dataContainer.innerHTML =
    '<img class="imageNotfication" src = "https://cdn.pixabay.com/photo/2017/08/02/00/46/owl-2569202_150.png" ><h2 class="notification">"Oops, no events in this country!"</h2> ';
  preloader.hide();
}
export { getData };

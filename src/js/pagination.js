// import { error, info } from '@pnotify/core';
import { BASE_URL, API_KEY } from './urlBaseConst'
import { searchInput, preloader, } from './refs';
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
    '<img class="imageNotfication" src = "http://papus666.narod.ru/clipart/e/enot/enot08.png"  ><h2 class="notification">"Oh no, this is bad URL. Please, try again"</h2> ';
  preloader.hide();
}
function onInfoBadSearch() {
  dataContainer.innerHTML =
    '<img class="imageNotfication" src = "http://papus666.narod.ru/clipart/e/enot/enot07.png" ><h2 class="notification">"Oops, no events in this country!"</h2> ';
  preloader.hide();
}
export { getData };

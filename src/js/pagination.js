// import { error, info } from '@pnotify/core';
import { BASE_URL, API_KEY } from './urlBaseConst'
import { searchInput, preloader, } from './refs';
import { onRenderingSearchEvents } from './renderingSaerchEvents';

function getData(url) {
  $('#demo').pagination({
    dataSource: `${BASE_URL}?${url}&apkey=${API_KEY}`,
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
    '<img class="imageNotfication" src = "https://avatanplus.ru/files/resources/original/5976e8c05a59415d787d2f72.png"  ><h2 class="notification">"Oh no, this is bad URL. Please, try again"</h2> ';
  preloader.hide();
}
function onInfoBadSearch() {
  dataContainer.innerHTML =
    '<img class="imageNotfication" src = "https://i.pinimg.com/originals/53/52/7e/53527e7fcfed3820a3e38bb755888650.png" ><h2 class="notification">"Oops, no events in this country!"</h2> ';
  preloader.hide();
}
export { getData };

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
    pageSize: 24,

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
  error({
    text: 'Error 404! Bad URL.',
    delay: 3000,
  });
}
function onInfoBadSearch() {
  dataContainer.innerHTML =
    '<img class="imageNotfication" src = "https://cdn.pixabay.com/photo/2015/03/08/17/25/musician-664432_150.jpg"  ><h2 class="notification">"Sorry, no events in this country!"</h2> ';
  preloader.hide();
}

export { getData };

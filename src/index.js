import './js/scrollUp';
import './js/team-modal';
import preloaderFactory from './js/preloader';
import 'material-design-icons/iconfont/material-icons.css';
import './sass/main.scss';
import './sass/components/_pagination.scss';
import './js/renderEventCards';
import './js/renderOptionSelect';
import pagination from 'paginationjs';
import eventsCardTmplCopy from './templates/eventsCardTmpl_copy.hbs';
import './js/modal';
import chooseLazyLoad from './js/lazy-load';
import { onParametersDataBase } from './js/onParametersDataBase';
import { error, info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { searchForm, searchInput, dataContainer } from './js/refs';

const preloader = preloaderFactory('#preloader');

searchForm.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  preloader.show();
  dataContainer.innerHTML = '';
  const valueInput = e.target.elements[0].value;
  const valueSelect = e.target.nextElementSibling[0].value;
  getData(valueSelect, valueInput);
}
function getData(valueSelect, valueInput) {
  $('#demo').pagination({
    dataSource: `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${valueInput}&size=24&sort=random&countryCode=${valueSelect}&apikey=k4ZuaibW7VaW2DqWiJtNRmwq3dAdRpv6`,
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
      renderingSearchEvents(data, '#dataContainer');
    },
    showPrevious: false,
    showNext: false,
  });
  searchInput.value = '';
}
// /**Rendering search events - callback*/
function renderingSearchEvents(dataBase, selectorJQDataContainer) {
  const dataParameters = onParametersDataBase(dataBase);
  localStorage.clear();
  localStorage.setItem('data', JSON.stringify(dataParameters));
  $(selectorJQDataContainer).html(eventsCardTmplCopy(dataParameters));
  preloader.hide();
  window.scrollTo({
    top: -100,
    behavior: 'smooth',
  });
}
// /**Function - callback pnotify */
function onError() {
  error({
    text: 'Error 404! Bad URL.',
    delay: 3000,
  });
}
function onInfoBadSearch() {
  info({
    text: 'No events in this country!',
    delay: 3000,
  });
  preloader.hide();
}
// /**Rendering first events */
function firstEventRender() {
  getData('', '');
}
/** Первый рендеринг и ленивка уйдет в модуль  как только будет фетч*/
firstEventRender();
chooseLazyLoad();
export function onLoadMoreModalBtn() {
  const loadMoreBtn = document.querySelector('.more-info');
  if (document.contains(loadMoreBtn)) {
    loadMoreBtn.addEventListener('click', showMore);
  }
}
function showMore(e) {
  e.preventDefault();
  let fetchResult = JSON.parse(localStorage.getItem('data'));
  const modal = document.querySelector('.basicLightbox');
  modal.remove();
  document.body.style.overflow = 'auto';
  const id = e.target.parentNode.id;
  const valueInput = fetchResult.find(e => e.id === id).name;
  getData(' ', valueInput);
}

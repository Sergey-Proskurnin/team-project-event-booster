// import './styles.css';
// import './sass/utils/variables.scss'
import './js/scrollUp';
import './js/team-modal';
import preloaderFactory from './js/preloader';

import 'material-design-icons/iconfont/material-icons.css';
import './sass/main.scss';
import './sass/components/_pagination.scss';
// import './js/apiService';
import './js/renderEventCards';
import './js/renderOptionSelect';
// import './js/test';

// import apiService from './js/apiService';
import pagination from 'paginationjs';
import eventsCardTmpl from './templates/eventsCardTmpl.hbs';
import eventsCardTmplCopy from './templates/eventsCardTmpl_copy.hbs';
import './js/modal';
import chooseLazyLoad from './js/lazy-load';

import { dataForEach, onParametersDataBase } from './js/onParametersDataBase';
// import { resultGallery } from './js/test'
import { info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

// console.log(resultGallery);

// function worldEvents() {
//   fetch(
//     'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&sort=random&apikey=k4ZuaibW7VaW2DqWiJtNRmwq3dAdRpv6',
//   )
//     .then(resp => resp.json())
//     .then(data => {
//       const { events } = data._embedded;
//       const markup = eventsCardTmpl(events);
//       refs.dataContainer.insertAdjacentHTML('beforeend', markup);
//     });
// }

// worldEvents();

const refs = {
  searchForm: document.querySelector('.form-submit'),
  searchInput: document.querySelector('.input'),
  select: document.querySelector('.select'),
  dataContainer: document.querySelector('#dataContainer'),
};

const preloader = preloaderFactory('#preloader');

// let fetchResult = [];
// localStorage.setItem('data', JSON.stringify(fetchResult));
// export { fetchResult };

// countryCode = ${refs.select.value}
refs.searchForm.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  preloader.show();
  refs.dataContainer.innerHTML = '';
  const valueInput = e.target.elements[0].value;
  const valueSelect = e.target.nextElementSibling[0].value;
  getData(valueSelect, valueInput);
}

function getData(valueSelect, valueInput) {
  $('#demo').pagination({
    dataSource: `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${valueInput}&size=24&sort=random&countryCode=${valueSelect}&apikey=k4ZuaibW7VaW2DqWiJtNRmwq3dAdRpv6`,
    locator: '_embedded.events',
    totalNumberLocator: function (response) {
      return response.page.totalPages;
    },
    pageSize: 24,
    
    callback: function (data, pagination) {
      console.log(data.length === undefined);
      const dataParameters = onParametersDataBase(data);
      localStorage.clear();
      localStorage.setItem('data', JSON.stringify(dataParameters));
      $('#dataContainer').html(eventsCardTmplCopy(dataParameters));
      preloader.hide();
      window.scrollTo({
        top: -100,
        behavior: 'smooth',
      });
    },
    showPrevious: false,
    showNext: false,
  });

  refs.searchInput.value = '';
}

// else {
//   info({
//     text: 'No events in this country!',
//     delay: 2000,
//   })
// }


/**Rendering first events */
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

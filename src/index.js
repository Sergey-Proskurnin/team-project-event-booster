// import './styles.css';
// import './sass/utils/variables.scss'
import 'material-design-icons/iconfont/material-icons.css';
import './sass/main.scss';
import './sass/components/pagination.scss';
// import './js/apiService';
import './js/renderEventCards';
import './js/renderOptionSelect';
import './js/test';

// import apiService from './js/apiService';
import pagination from 'paginationjs';
import eventsCardTmpl from './templates/eventsCardTmpl.hbs';
import './js/modal';
// import { resultGallery } from './js/test'
// console.log(resultGallery);

const refs = {
  searchForm: document.querySelector('.search-form'),
  searchInput: document.querySelector('.input'),
  select: document.querySelector('.select'),
};

let fetchResult = [];
export { fetchResult };

// countryCode = ${refs.select.value}

class ApiService {
  static getData() {
    $('#demo').pagination({
      dataSource: function (done) {
        $.ajax({
          type: 'GET',
          url: `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${refs.searchInput.value}&countryCode=${refs.select.value}&apikey=k4ZuaibW7VaW2DqWiJtNRmwq3dAdRpv6`,
          success: function (data) {
            console.log(data);
            if ('_embedded' in data) {
              done(data._embedded.events);
              fetchResult.push(...data._embedded.events);
            }
          },
        });
      },
      pageSize: 10,
      showPrevious: false,
      showNext: false,
      callback: function (data) {
        console.log(data);
        $('#dataContainer').html(eventsCardTmpl(data));
      },
    });
  }
}

function onSubmitForm(e) {
  e.preventDefault();
  ApiService.getData();
}

refs.searchForm.addEventListener('submit', onSubmitForm);


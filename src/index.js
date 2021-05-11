// import './styles.css';
// import './sass/utils/variables.scss'
import 'material-design-icons/iconfont/material-icons.css';
import './sass/main.scss';
import './sass/components/_pagination.scss';
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

function worldEvents() {
  fetch(
    'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=k4ZuaibW7VaW2DqWiJtNRmwq3dAdRpv6',
  )
    .then(resp => resp.json())
    .then(data => {
      const { events } = data._embedded;
      const markup = eventsCardTmpl(events);
      refs.dataContainer.insertAdjacentHTML('beforeend', markup);
    });
}

worldEvents();

const refs = {
  searchForm: document.querySelector('.form-submit'),
  searchInput: document.querySelector('.input'),
  select: document.querySelector('.select'),
  dataContainer: document.querySelector('#dataContainer'),
};

let fetchResult = [];
export { fetchResult };

// countryCode = ${refs.select.value}
refs.searchForm.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  const valueInput = e.target.elements[0].value;
  const valueSelect = e.target.nextElementSibling[0].value;
  ApiService.getData(valueSelect, valueInput);
}

class ApiService {
  static getData(valueSelect, valueInput) {
    $('#demo').pagination({
      dataSource: function (done) {
        $.ajax({
          type: 'GET',
          url: `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${valueInput}&size=200&countryCode=${valueSelect}&apikey=k4ZuaibW7VaW2DqWiJtNRmwq3dAdRpv6`,
          success: function (data) {
            console.log(data);
            if ('_embedded' in data) {
              done(data._embedded.events);
              fetchResult=[]
              fetchResult.push(...data._embedded.events);
            } else {
              alert('sorry bro, no events in this country');
            }
            refs.searchInput.value = '';
          },
        });
      },
      pageSize: 24,
      showPrevious: false,
      showNext: false,
      callback: function (data) {
        console.log(data);
        $('#dataContainer').html(eventsCardTmpl(data));
      },
    });
  }
}

import NewApiService from './apiService';
import eventsCardTmpl from '../templates/eventsCardTmpl.hbs';

const apiService = new NewApiService();
const inputSearch = document.querySelector('.form-submit');
const eventCardsRef = document.querySelector('.event-cards');

console.log(inputSearch);
inputSearch.addEventListener('submit', onSearch);

apiService.query = 'eagles';
console.log(apiService);

async function onSearch(e) {
  e.preventDefault();
  const galleryArray = await apiService.fetchApi();
  return galleryArray;
}
function renderEventCards() {
  return apiService.fetchApi().then(appendEventMarkup);
}

function appendEventMarkup(events) {
  eventCardsRef.insertAdjacentHTML('beforeend', eventsCardTmpl(events));
}

renderEventCards();

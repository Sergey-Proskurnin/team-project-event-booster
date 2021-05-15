import preloaderFactory from './preloader';

const searchForm = document.querySelector('.form-submit');
const searchInput = document.querySelector('.input');
const select = document.querySelector('.select');
const dataContainer = document.querySelector('#dataContainer');
const preloader = preloaderFactory('#preloader');
const eventCardRef = document.querySelector('.event-cards');

export {
  eventCardRef,
  searchForm,
  searchInput,
  select,
  dataContainer,
  preloader,
};

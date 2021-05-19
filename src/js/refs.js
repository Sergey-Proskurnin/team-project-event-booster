import preloaderFactory from './preloader';

const searchForm = document.querySelector('.form-submit');
const searchInput = document.querySelector('.input');
const select = document.querySelector('.select');
const dataContainer = document.querySelector('#dataContainer');
const preloader = preloaderFactory('#preloader');
const eventCardRef = document.querySelector('.event-cards');
const signInBtnRef = document.querySelector('.sign-in-button');
const authContaineRef = document.querySelector('.auth-container');
const authWrapperRef = document.querySelector('.auth-wrapper');

const gallery = document.querySelector('.eventsCardTmpl_copy');
const geoModal = document.querySelector('.js-geolocation-modal');
const geoModalBackdrop = document.querySelector('.js-geolocation-backdrop');

export {
  eventCardRef,
  gallery,
  geoModal,
  geoModalBackdrop,
  searchForm,
  searchInput,
  select,
  dataContainer,
  preloader,
  signInBtnRef,
  authContaineRef,
  authWrapperRef,
};

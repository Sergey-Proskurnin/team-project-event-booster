import preloaderFactory from './preloader';

const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';
const API_KEY = 'k4ZuaibW7VaW2DqWiJtNRmwq3dAdRpv6';

const searchForm = document.querySelector('.form-submit');
const searchInput = document.querySelector('.input');
const select = document.querySelector('.select');
const dataContainer = document.querySelector('#dataContainer');
const preloader = preloaderFactory('#preloader');
const eventCardRef = document.querySelector('.event-cards');
const signInBtnRef = document.querySelector('.sign-in-button');
const authContaineRef = document.querySelector('.auth-container');
const authWrapperRef = document.querySelector('.auth-wrapper');
const paginationRef = document.querySelector('#demo')

export {
  eventCardRef,
  searchForm,
  searchInput,
  select,
  dataContainer,
  preloader,
  BASE_URL,
  API_KEY,
  signInBtnRef,
  authContaineRef,
  authWrapperRef,
  paginationRef
};

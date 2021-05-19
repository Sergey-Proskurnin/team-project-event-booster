// import preloaderFactory from './preloader';
import chooseLazyLoad from './lazy-load';
import { preloader } from './refs';
import { onParametersDataBase } from './onParametersDataBase';
import eventsCardTmplCopy from '../templates/eventsCardTmpl_copy.hbs';
import addAnimationOnCards from './addAnimationOnCards';

// /**Rendering search events - callback*/
function onRenderingSearchEvents(dataBase, selectorJQDataContainer) {
  const dataParameters = onParametersDataBase(dataBase);
  localStorage.clear();
  localStorage.setItem('data', JSON.stringify(dataParameters));
  $(selectorJQDataContainer).html(eventsCardTmplCopy(dataParameters));
  preloader.hide();
  runAnimationCards();
  chooseLazyLoad();
  window.scrollTo({
    top: -100,
    behavior: 'smooth',
  });
}

function runAnimationCards() {
  const elemCollection = document.querySelectorAll('.event-card');
  Array.from(elemCollection).map(elem => {
    setTimeout(() => {
      addAnimationOnCards(elem);
    }, 0);
  })
};

export { onRenderingSearchEvents };

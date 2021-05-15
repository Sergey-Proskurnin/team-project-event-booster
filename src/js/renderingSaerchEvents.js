// import preloaderFactory from './preloader';
import chooseLazyLoad from './lazy-load';
import { preloader } from './refs';
import { onParametersDataBase } from './onParametersDataBase';
import eventsCardTmplCopy from '../templates/eventsCardTmpl_copy.hbs';

// /**Rendering search events - callback*/
function onRenderingSearchEvents(dataBase, selectorJQDataContainer) {
  const dataParameters = onParametersDataBase(dataBase);
  localStorage.clear();
  localStorage.setItem('data', JSON.stringify(dataParameters));
  $(selectorJQDataContainer).html(eventsCardTmplCopy(dataParameters));
  preloader.hide();
  chooseLazyLoad();
  window.scrollTo({
    top: -100,
    behavior: 'smooth',
  });
}

export { onRenderingSearchEvents };

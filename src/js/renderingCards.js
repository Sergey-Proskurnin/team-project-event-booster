import chooseLazyLoad from './lazy-load';
import getUrlValue from './urlValue'
// /**Rendering first events */
  
function firstEventRender() {
  getUrlValue('', '')
}
/** Первый рендеринг и ленивка уйдет в модуль  как только будет фетч*/
firstEventRender();
chooseLazyLoad();

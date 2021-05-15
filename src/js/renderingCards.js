import { getData } from './pagination';
import chooseLazyLoad from './lazy-load';
// /**Rendering first events */
function firstEventRender() {
  getData('', '');
}
/** Первый рендеринг и ленивка уйдет в модуль  как только будет фетч*/
firstEventRender();
chooseLazyLoad();

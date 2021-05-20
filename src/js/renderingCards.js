import chooseLazyLoad from './lazy-load';
import getUrlValue from './urlValue';
// /**Rendering first events */

export function firstEventRender() {
  getUrlValue('', '');
}

firstEventRender();
chooseLazyLoad();

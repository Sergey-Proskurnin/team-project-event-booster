import { searchForm, dataContainer, preloader } from './refs';

import getUrlValue from './urlValue'
searchForm.addEventListener('submit', onSubmitForm);
 
function onSubmitForm(e) {
  e.preventDefault();
  preloader.show();
  dataContainer.innerHTML = '';
  const valueInput = e.target.elements[0].value;
  const valueSelect = e.target.nextElementSibling[0].value;
  getUrlValue(valueInput, valueSelect)
}

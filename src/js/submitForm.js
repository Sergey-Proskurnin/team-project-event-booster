import { searchForm, dataContainer, preloader } from './refs';
import { getData } from './pagination';
import NewApiUrlService from './apiUrlService';
searchForm.addEventListener('submit', onSubmitForm);

const apiUrlService = new NewApiUrlService();

function onSubmitForm(e) {
  e.preventDefault();
  preloader.show();
  dataContainer.innerHTML = '';
  const valueInput = e.target.elements[0].value;
  const valueSelect = e.target.nextElementSibling[0].value;
  const arrayValue = [valueInput, valueSelect];
  apiUrlService.query = arrayValue;
  getData(apiUrlService.fetchApi());
}

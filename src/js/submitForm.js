import { searchForm, dataContainer, preloader } from './refs';
import { getData } from './pagination';

searchForm.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  preloader.show();
  dataContainer.innerHTML = '';
  const valueInput = e.target.elements[0].value;
  const valueSelect = e.target.nextElementSibling[0].value;
  console.log(valueInput);
  console.log(valueSelect);
  getData(valueSelect, valueInput);
}

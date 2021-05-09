import data from '../data/test';
import optionMarkupTmpl from '../templates/optionCodeCountryTmpl.hbs';

const selectForm = document.querySelector('.select-country')

function onRenderOptionSelect(data) {
    const marcup = optionMarkupTmpl(data)
   return selectForm.insertAdjacentHTML('beforeend', marcup);
}

onRenderOptionSelect(data)
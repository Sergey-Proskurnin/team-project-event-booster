import data from '../data/countryCodes';
import optionMarkupTmpl from '../templates/optionCodeCountryTmpl.hbs';

const selectForm = document.querySelector('.select-country')

function onRenderOptionSelect(data) {
    const markup = optionMarkupTmpl(data)
   return selectForm.insertAdjacentHTML('beforeend', markup);
}

onRenderOptionSelect(data)
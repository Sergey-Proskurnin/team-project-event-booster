import { getData } from './pagination';
import NewApiUrlService from './apiUrlService';


export default function getUrlValue(keyword, countryCode) {
  const apiUrlService = new NewApiUrlService();
  const arrayValue = [keyword, countryCode];
  apiUrlService.query = arrayValue;
  getData(apiUrlService.fetchApi());
}

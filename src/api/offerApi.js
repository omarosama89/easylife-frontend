import { handleResponse, handleError } from "./apiUtils";
import * as config from '../config'
import { authHeader } from '../helpers/auth-header'

const URL = config.default['HOST'];
const baseUrl = URL + "/admin/offers";



export function getOffers() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch(baseUrl, requestOptions)
    .then(handleResponse)
    .catch(handleError);
}


import { handleResponse, handleError } from "./apiUtils";
import * as config from '../config'

const URL = config.default['HOST'];
const baseUrl = URL + "/admin/shops";



export function getShops() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}


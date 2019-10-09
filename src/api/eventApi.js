import { handleResponse, handleError } from "./apiUtils";
import * as config from '../config'

const URL = config.default['HOST'];
const baseUrl = URL + "/admin/events";



export function getEvents() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}


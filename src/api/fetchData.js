import axios from 'axios';
import wrapPromise from './wrapPromise';

/**
 * Wrap Axios Request with the wrapPromise function
 * @param {string} url Url to fetch
 * @returns {Promise} A wrapped promise
 */
function fetchData(url) {
  const promise = axios.get(url).then(({data}) => data);

  return wrapPromise(promise);
}

export default fetchData;

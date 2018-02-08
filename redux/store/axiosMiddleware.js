// import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import { API_CONFIGS, AXIOS_REQUEST_SUFFIXES } from '../constants';

const { API_VERSION, BASE_URI } = API_CONFIGS;
const { ERROR, SUCCESS } = AXIOS_REQUEST_SUFFIXES;
 
const axiosClient = axios.create({
  baseURL: BASE_URI,
  headers: { Accept: `application/json; version=${API_VERSION}` },
  responseType: 'json',
});
 
export default axiosMiddleware(axiosClient, {
  errorSuffix: ERROR,
  interceptors: {
    response: [{
      error: (configs, request) => {
        const { dispatch } = configs;
        const { request: { response: { errors } = {}, status } = {} } = request;
  
        return Promise.reject({ ...request });
      },
      success: (configs, request) => {
        const { config: { logging } = {} } = request;
        return request;
      },
    }],
  },
  successSuffix: SUCCESS,
});
  

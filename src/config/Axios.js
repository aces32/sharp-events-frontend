/* eslint-disable @typescript-eslint/no-throw-literal */
/* eslint-disable import/no-unresolved */

import axios from 'axios';
import Toast from 'components/atoms/a-Toast';
import store from 'store';
import { LoadingActions } from 'store/reducers/loading';
import config from './config.json';

const Axios = axios.create({
  baseURL: config.SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
    accept: '*/*',
  },
});
const { dispatch } = store;
const { setIsLoading } = LoadingActions;
Axios.interceptors.request.use(
  (request) => {
    if (!navigator.onLine) {
      Toast('Please check your Internet Connection', { type: 'warning' });
      throw {
        response: {
          data: {
            description: 'Please check your Internet Connection',
          },
        },
      };
    }

    dispatch(setIsLoading({ isLoading: true }));

    return request;
  },
  (error) => {
    // Do something with request error
    dispatch(setIsLoading({ isLoading: false }));
    return Promise.reject(error);
  },
);

Axios.interceptors.response.use(
  (response) => {
    dispatch(setIsLoading({ isLoading: false }));
    return response;
  },
  async (error) => {
    dispatch(setIsLoading({ isLoading: false }));
    Toast(error?.response?.data?.message, { type: 'error' });
  },
);

export default Axios;

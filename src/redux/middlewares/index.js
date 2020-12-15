import axios from 'axios';
import types from '../types';
import { accessDenied, apiError, apiStart, apiEnd } from '../action/API';
import get from 'lodash.get';
import store from '../store';

const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type !== types.API) return;

  const {
    url,
    method,
    data,
    accessToken,
    onSuccess,
    onFailure,
    label,
    headers,
    isBackgroundCall,
    addJwtFromRedux,
    removeappidHeader,
  } = action.payload;
  const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data';
  const reduxStore = store.getState();
  const jwtToken = get(reduxStore, 'User.jwtAccessToken');

  // axios default configs
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || '';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  if (removeappidHeader) {
    delete axios.defaults.headers.common['Authorization'];
    delete axios.defaults.headers.common['app_id'];
  }
  // if (!removeappidHeader) axios.defaults.headers.common['app_id'] = getAppId();
  if (!removeappidHeader)
    axios.defaults.headers.common['Authorization'] = `${
      addJwtFromRedux ? jwtToken : accessToken
    }`;

  if (label) {
    dispatch(apiStart(label));
  }

  axios
    .request({
      url,
      method,
      headers,
      [dataOrParams]: data,
    })
    .then(({ data }) => {
      onSuccess && dispatch(onSuccess(data));
    })
    .catch(error => {
      dispatch(
        apiError(error.message, {
          url,
          method,
          headers,
          [dataOrParams]: data,
          isBackgroundCall,
        }),
      );
      onFailure && onFailure(error);
      console.info('error', error);
      if (error.response && error.response.status === 403) {
        dispatch(accessDenied(window.location.pathname));
      }
    })
    .then(() => {
      if (label) {
        setTimeout(() => {
          dispatch(apiEnd(label));
        }, 500);
      }
    });
};

const middelware =  [apiMiddleware];
export default middelware;

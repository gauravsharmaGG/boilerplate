import types from '../types';

export const apiStart = label => ({
  type: types.API_START,
  payload: label,
});

export const apiEnd = label => ({
  type: types.API_END,
  payload: label,
});

export const accessDenied = url => ({
  type: types.ACCESS_DENIED,
  payload: {
    url,
  },
});

export const apiError = (
  error,
  { url, method, headers, data, isBackgroundCall },
) => {
  if (error && error === 'Network Error') {
    return {
      type: types.SHOW_ERROR_MODAL,
      payload: {
        error: isBackgroundCall ? '' : 512,
      },
    };
  }
  return {
    type: types.SHOW_ERROR_MODAL,
    payload: {
      error: isBackgroundCall ? '' : 500,
    },
  };
};

export function fetchData({
  url = '',
  method = 'GET',
  data = null,
  accessToken = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = '',
  headersOverride = null,
  isBackgroundCall = false,
  addJwtFromRedux = false,
  headers,
  removeappidHeader = false,
}) {
  return {
    type: types.API,
    payload: {
      url,
      method,
      data,
      accessToken,
      onSuccess,
      onFailure,
      label,
      headersOverride,
      isBackgroundCall,
      addJwtFromRedux,
      headers,
      removeappidHeader,
    },
  };
}

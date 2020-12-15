import types from '../types';

const initialState = {
  errorModal: false,
  successModal: false,
  confirmationModal: false,
  infoModal: false,
  isApiLoading: false,
};

const common = (state = initialState, action) => {
  switch (action.type) {
    case types.API_START:
      if (action.payload !== types.HIDE_APPLICATION_LOADER) {
        return {
          ...state,
          isApiLoading: true,
        };
      }
      break;
    case types.API_END:
      if (action.payload !== types.HIDE_APPLICATION_LOADER) {
        return {
          ...state,
          isApiLoading: false,
        };
      }
      break;
    case types.ACCESS_DENIED:
      return {
        ...state,
        errorModal: 'ERR:100401 - Sorry. Please try again',
      };
    default:
      return state;
  }
};

export default common;

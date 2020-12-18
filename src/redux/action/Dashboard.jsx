import { fetchData } from './API';
import types from '../types';

export const getUsersData = (onSuccess, onError) => (dispatch) => {
  dispatch(
    fetchData({
      url: `${process.env.REACT_APP_API_ENDPOINT}/api/users?page=2`,
      label: true,
      addJwtFromRedux: true,
      onSuccess: (data) => (dispatch) => {
        dispatch({
          type: types.SET_USERS_DATA,
          payload: {
            users: data && data.data,
          },
        })
        onSuccess && onSuccess();
      },
      onFailure: () => onError && onError(),
    })
  );
};

export const tesdata = () => {
  return {
    type: types.SOME_TEST_DATA,
    payload: {
      data: 'abcd',
    },
  };
};


export const setUserJWT = () => {
  return {
    type: types.SET_USER_JWT,
    payload: 'dsadasdasdsadasdadas',
  };
};

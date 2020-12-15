import { fetchData } from './API';
import types from '../types';

export const getUsersData = (onSuccess, onError) => dispatch => {
    dispatch(
      fetchData({
        url: `https://reqres.in/api/users?page=2`,
        label: true,
        onSuccess: data => dispatch =>
          dispatch({
            type: types.SET_USERS_DATA,
            payload: {
              users: data && data.data,
            },
          }),
        onFailure: () => onError && onError(),
      }),
    );
  };
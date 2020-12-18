import { fetchData } from './API';
import types from '../types';

export const getSomeRandomData = (onSuccess, onError) => (dispatch) => {
    dispatch(
      fetchData({
        url: `https://jsonplaceholder.typicode.com/todos/1`,
        label: true,
        addJwtFromRedux: true,
        onSuccess: (data) => (dispatch) => {
          dispatch({
            type: types.SET_RANDOM_DATA,
            payload: {
              randomData: data,
            },
          })
          onSuccess && onSuccess();
        },
        onFailure: () => onError && onError(),
      })
    );
  };
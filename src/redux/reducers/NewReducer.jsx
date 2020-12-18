import types from '../types';

const initialState = {
  userData: false,
};

const newData = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_RANDOM_DATA:
      const { randomData } = action.payload;
      return {
        ...state,
        userData: randomData,
      };
    default:
      return state;
  }
};

export default newData;

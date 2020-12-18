import types from '../types';

const initialState = {
  jwtAccessToken: '',
  users: false,
  data: false,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER_JWT:
      return {
        ...state,
        jwtAccessToken: action.payload,
      };
      case types.SET_USERS_DATA:
        const { users} = action.payload;
        return {
          ...state,
          users,
        };
      case types.SOME_TEST_DATA:
        const { data } = action.payload;
        return {
          ...state,
          data,
        };
    default:
      return state;
  }
};

export default users;

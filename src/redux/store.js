import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import User from './reducers/userReducer';
import Common from './reducers/commonReducer';
import NewReducer from './reducers/NewReducer';
import middlewares from './middlewares';

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: User,
    newData: NewReducer,
    Common: Common,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(middlewares),
  devTools: process.env.NODE_ENV !== 'production',
});

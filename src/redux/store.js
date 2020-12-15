import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import User from './reducers/userReducer';
import middlewares from './middlewares';

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: User,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(middlewares),
  devTools: process.env.NODE_ENV !== 'production',
});

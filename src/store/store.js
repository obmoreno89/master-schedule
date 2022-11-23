import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';

const store = configureStore({
  reducer: {
    login: authSlice,
  },
});

export default store;

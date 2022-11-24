import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './slice/loginSlice';

const store = configureStore({
  reducer: {
    users: loginSlice,
  },
});

export default store;

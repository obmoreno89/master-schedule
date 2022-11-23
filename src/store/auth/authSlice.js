import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'login',
  initialState: { loading: false, errorLogin: false },

  reducers: {
    startLoading: (state, action) => {
      state.loading = true;
    },
    finishLoading: (state, action) => {
      state.loading = false;
    },

    handleErrorLogin: (state, action) => {
      state.errorLogin = true;
    },
    handleErrorLoginClosed: (state, action) => {
      state.errorLogin = false;
    },
  },
});

export const {
  startLoading,
  finishLoading,
  handleErrorLogin,
  handleErrorLoginClosed,
} = authSlice.actions;

export default authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
};

const loginSlice = createSlice({
  initialState,
  name: 'users',
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = loginSlice.actions;

export const selectUser = (state) => state.users.user;

export default loginSlice.reducer;

export const sendData = (data) => (dispatch) => {
  axios
    .post('http://44.211.175.241/api/auth/login/', data)
    .then((response) => {
      if (response.data.status_code === 202) {
        dispatch(setUser(response.data));
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('first_name', response.data.first_name);
      }
    })
    .catch((err) => console.log(err));
};

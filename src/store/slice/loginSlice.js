import { createSlice, createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const revertLogout = createAction('REVERT_LOGOUT');

const initialState = {
  user: null,
  isCorrect: false,
  loading: false,
};

const loginSlice = createSlice({
  initialState,
  name: 'users',
  extraReducers: (builder) => {
    builder.addCase(revertLogout, (state, action) => {
      state.logout = false;
    });
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsCorrect: (state, action) => {
      state.isCorrect = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setUser, setIsCorrect, setLoading } = loginSlice.actions;

export const selectUser = (state) => state.users.user;
export const selectIsCorrect = (state) => state.users.isCorrect;
export const selectLoading = (state) => state.users.loading;
export const selectLogout = (state) => state.users.logout;

export default loginSlice.reducer;

export const sendData = (data, navigate) => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .post('http://44.211.175.241/api/auth/login/', data)
    .then((response) => {
      dispatch(setLoading(false));
      if (response.data.status_code === 202) {
        dispatch(setUser(response.data));
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('first_name', response.data.first_name);
        dispatch(setIsCorrect(false));
        navigate('/master-schedule/');
      }
    })
    .catch(() => {
      dispatch(setIsCorrect(true));
      dispatch(setLoading(false));
    });
};

export const logoutUser = (navigate) => () => {
  const emailUser = localStorage.getItem('email');
  const tokenUser = localStorage.getItem('token');
  const email = {
    email: emailUser,
  };
  axios
    .post('http://44.211.175.241/api/auth/logout/', email, {
      headers: { Authorization: `token ${tokenUser}` },
    })
    .then((response) => {
      if (response.data.status_code === 200) {
        localStorage.clear();
        navigate('/master-schedule/signin/');
      }
    });
};

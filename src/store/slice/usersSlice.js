import { createAction, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { endpointsCodes } from './functions';

const initialState = {
  user: null,
  userIsOk: false,
  userFail: null,
  userLoading: false,
  roles: [],
  allUser: [],
};

export const revertAll = createAction('REVERT_ALL');

const usersSlice = createSlice({
  initialState,
  name: 'users',
  extraReducers: (builder) => {
    builder.addCase(revertAll, (state, action) => {
      state.user = null;
      state.userIsOk = false;
      state.userFail = null;
      state.userLoading = false;
    });
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserIsOk: (state, action) => {
      state.userIsOk = action.payload;
    },
    setUserLoading: (state, action) => {
      state.userLoading = action.payload;
    },
    setUserFail: (state, action) => {
      state.userFail = action.payload;
    },
    setRoles: (state, action) => {
      state.roles = action.payload;
    },
    setAllUser: (state, action) => {
      state.allUser = action.payload;
    },
  },
});

export const {
  setUser,
  setUserIsOk,
  setUserLoading,
  setUserFail,
  setRoles,
  setAllUser,
} = usersSlice.actions;

export const selectUser = (state) => state.users.user;
export const selectUserIsOk = (state) => state.users.userIsOk;
export const selectUserLoading = (state) => state.users.userLoading;
export const selectUserFail = (state) => state.users.userFail;
export const selectRoles = (state) => state.users.roles;
export const selectAllUser = (state) => state.users.allUser;

export default usersSlice.reducer;

export const registerUser = (data) => (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(setUserLoading(true));
  axios
    .post('http://44.211.175.241/api/auth/register/', data, {
      headers: { Authorization: `token ${token}` },
    })
    .then((response) => {
      dispatch(setUserLoading(false));
      if (response.data.status_code === 201) {
        dispatch(setUser(response.data));
        dispatch(setUserFail(null));
        dispatch(setUserIsOk(true));
      }
    })
    .catch((error) => {
      endpointsCodes(error, dispatch, setUserFail);

      dispatch(setUserIsOk(false));
      dispatch(setUserLoading(false));
      setTimeout(() => dispatch(revertAll()), 3000);
    });
};

export const getRoles = () => (dispatch) => {
  axios
    .get('http://44.211.175.241/api/auth/list-permissions')
    .then((response) => {
      dispatch(setRoles(response.data));
    })
    .catch((err) => console.log(err));
};

export const getAlluser = () => (dispatch) => {
  axios
    .get('http://44.211.175.241/api/auth/list-users')
    .then((response) => {
      dispatch(setAllUser(response.data));
    })
    .catch((err) => console.log(err));
};

export const deleteUser = (idUser) => (dispatch) => {
  const token = sessionStorage.getItem('token');
  const userId = sessionStorage.getItem('userId');
  axios
    .delete(`http://44.211.175.241/api/auth/delete-user/${userId}`, {
      headers: { Authorization: `token ${token}` },
    })
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
};

export const updateUser = (data) => (dispatch) => {
  dispatch(setUserLoading(true));
  const userId = sessionStorage.getItem('id');
  console.log(userId);
  axios
    .put(`http://44.211.175.241/api/auth/update-user-data/${userId}`, data)
    .then((response) => dispatch(setUserLoading(false)))
    .catch((err) => dispatch(setUserLoading(false)));
};

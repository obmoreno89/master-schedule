import { createAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  userIsOk: false,
  userFail: false,
  userLoading: false,
};

export const revertAll = createAction("REVERT_ALL");

const usersSlice = createSlice({
  initialState,
  name: "users",
  extraReducers: (builder) => {
    builder.addCase(revertAll, () => initialState);
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
  },
});

export const { setUser, setUserIsOk, setUserLoading, setUserFail } =
  usersSlice.actions;

export const selectUser = (state) => state.users.user;
export const selectUserIsOk = (state) => state.users.userIsOk;
export const selectUserLoading = (state) => state.users.userLoading;
export const selectUserFail = (state) => state.users.userFail;

export default usersSlice.reducer;

export const registerUser = (data) => (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch(setUserLoading(true));
  axios
    .post("http://44.211.175.241/api/auth/register/", data, {
      headers: { Authorization: `token ${token}` },
    })
    .then((response) => {
      dispatch(setUserLoading(false));
      if (response.data.status_code === 201) {
        dispatch(setUser(response.data));
        dispatch(setUserFail(false));
        dispatch(setUserIsOk(true));
      }
    })
    .catch(() => {
      dispatch(setUserFail(true));
      dispatch(setUserIsOk(false));
      dispatch(setUserLoading(false));
      setTimeout(() => dispatch(revertAll()), 5000);
    });
};

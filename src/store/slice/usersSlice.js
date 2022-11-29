import { createAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  userIsOk: false,
  userFail: null,
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
        dispatch(setUserFail(null));
        dispatch(setUserIsOk(true));
      }
    })
    .catch((error) => {
      if (error.code === "ERR_NETWORK") {
        dispatch(
          setUserFail({
            code: 500,
            msg: "internal server error",
            state: true,
          })
        );
      } else {
        switch (error.response.status) {
          case 400: {
            dispatch(
              setUserFail({
                code: 400,
                msg: error.response.data.msg,
                state: true,
              })
            );
            break;
          }
          case 401: {
            dispatch(
              setUserFail({
                code: 401,
                msg: error.response.statusText,
                state: true,
              })
            );
            break;
          }
          case 500: {
            dispatch(
              setUserFail({
                code: 500,
                msg: "internal server error",
                state: true,
              })
            );
            break;
          }
        }
      }

      dispatch(setUserIsOk(false));
      dispatch(setUserLoading(false));
      setTimeout(() => dispatch(revertAll()), 5000);
    });
};

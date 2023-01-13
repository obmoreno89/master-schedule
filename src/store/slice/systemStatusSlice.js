import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  statusList: [],
  syncUrl: {
    isLoading: false,
    isSuccess: false,
    isError: false,
  },
};

const systemStatusSlice = createSlice({
  initialState,
  name: "systemStatus",
  reducers: {
    setStatusList: (state, action) => {
      state.statusList = action.payload;
    },
    setSyncUrl: (state, action) => {
      state.syncUrl[action.payload.key] = action.payload.value;
    },
  },
});

export const { setStatusList, setSyncUrl } = systemStatusSlice.actions;

export const selectStatusList = (state) => state.systemStatus.statusList;
export const selectSyncUrl = (state) => state.systemStatus.syncUrl;

export default systemStatusSlice.reducer;

export const getStatusList = () => (dispatch) => {
  axios
    .get("http://35.174.106.95/api/interfaces/list")
    .then((response) => {
      if (response.status === 200) {
        dispatch(setStatusList(response.data.interfaces));
      }
    })
    .catch((err) => console.log(err));
};

export const sendUrl = (url) => (dispatch) => {
  dispatch(setSyncUrl({ key: "isLoading", value: true }));
  dispatch(setSyncUrl({ key: "isError", value: false }));
  dispatch(setSyncUrl({ key: "isSuccess", value: false }));
  axios
    .get(url)
    .then((response) => {
      if (response.status === 200) {
        dispatch(setSyncUrl({ key: "isLoading", value: false }));
        dispatch(setSyncUrl({ key: "isError", value: false }));
        dispatch(setSyncUrl({ key: "isSuccess", value: true }));
      }
    })
    .catch(() => {
      dispatch(setSyncUrl({ key: "isLoading", value: false }));
      dispatch(setSyncUrl({ key: "isError", value: true }));
      dispatch(setSyncUrl({ key: "isSuccess", value: false }));
    });
};

import { createAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { endpointsCodes } from "./functions";

const initialState = {
  orders: [],
  groups: [],
  notFound: null,
};

export const revertAll = createAction("REVERT_ALL");

const planningSlice = createSlice({
  initialState,
  name: "planning",
  extraReducers: (builder) => {
    builder.addCase(revertAll, () => initialState);
  },
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setGroups: (state, action) => {
      state.groups = action.payload;
    },
    setNotFound: (state, action) => {
      state.notFound = action.payload;
    },
  },
});

export const { setOrders, setGroups, setNotFound } = planningSlice.actions;

export const selectOrders = (state) => state.planning.orders;
export const selectGroups = (state) => state.planning.groups;
export const selectNotFound = (state) => state.planning.notFound;

export default planningSlice.reducer;

export const getOrders = (data) => (dispatch) => {
  axios
    .post("http://44.211.175.241/api/open-orders/list", data)
    .then((response) => {
      if (response.status === 200) {
        dispatch(setOrders(response.data));
      }
    })
    .catch((error) => endpointsCodes(error, dispatch, setNotFound));
};

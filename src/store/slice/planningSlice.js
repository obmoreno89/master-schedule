import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  orders: [],
};

const planningSlice = createSlice({
  initialState,
  name: "planning",
  reducers: {
    setOrders: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setOrders } = planningSlice.actions;

export const selectOrders = (state) => state.planning.orders;

export default planningSlice.reducer;

export const getOrders = (data) => (dispatch) => {
  axios
    .post("http://44.211.175.241/api/open-orders/list", data)
    .then((response) => {
      dispatch(setOrders(response.data));
    })
    .catch((err) => console.log(err));
};

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  totalNumberOfOrders: [],
  totalAmountOfOrders: [],
};

const kpiSlice = createSlice({
  initialState,
  name: 'kpi',
  reducers: {
    setTotalNumberOfOrders: (state, action) => {
      state.totalNumberOfOrders = action.payload;
    },
    setTotalAmountOfOrders: (state, action) => {
      state.totalAmountOfOrders = action.payload;
    },
  },
});

export const { setTotalNumberOfOrders, setTotalAmountOfOrders } =
  kpiSlice.actions;

export const selectTotalNumberOfOrders = (state) =>
  state.kpi.totalNumberOfOrders;

export const selectTotalAmountOfOrders = (state) =>
  state.kpi.totalAmountOfOrders;

export default kpiSlice.reducer;

export const getKpiNumberOfOrders = () => (dispatch) => {
  axios
    .get('http://44.211.175.241/api/kpis/orders-in-past-due')
    .then((response) => dispatch(setTotalNumberOfOrders(response.data)))
    .catch((err) => console.log(err));
};

export const getKpiAmountOfOrders = () => (dispatch) => {
  axios
    .get('http://44.211.175.241/api/kpis/total-amount-orders-in-past-due')
    .then((response) => dispatch(setTotalAmountOfOrders(response.data)))
    .catch((err) => console.log(err));
};

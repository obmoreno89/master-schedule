import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  totalNumberOfOrders: [],
  totalAmountOfOrders: [],
  ordersProgrammed: [],
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
    setOrdersProgrammed: (state, action) => {
      state.ordersProgrammed = action.payload;
    },
  },
});

export const {
  setTotalNumberOfOrders,
  setTotalAmountOfOrders,
  setOrdersProgrammed,
} = kpiSlice.actions;

export const selectTotalNumberOfOrders = (state) =>
  state.kpi.totalNumberOfOrders;

export const selectTotalAmountOfOrders = (state) =>
  state.kpi.totalAmountOfOrders;

export const selectOrdersProgrammed = (state) => state.kpi.ordersProgrammed;

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

export const getOrdersProgrammed = () => (dispatch) => {
  axios
    .get('http://44.211.175.241/api/kpis/orders-without-ship-date')
    .then((response) => dispatch(setOrdersProgrammed(response.data)))
    .catch((err) => console.log(err));
};

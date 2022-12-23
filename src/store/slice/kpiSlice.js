import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  totalNumberOfOrders: [],
};

const kpiSlice = createSlice({
  initialState,
  name: 'kpi',
  reducers: {
    setTotalNumberOfOrders: (state, action) => {
      state.totalNumberOfOrders = action.payload;
    },
  },
});

export const { setTotalNumberOfOrders } = kpiSlice.actions;

export const selectTotalNumberOfOrders = (state) =>
  state.kpi.totalNumberOfOrders;

export default kpiSlice.reducer;

export const getKpi = () => (dispatch) => {
  axios
    .get('http://44.211.175.241/api/kpis/orders-in-past-due')
    .then((response) => dispatch(setTotalNumberOfOrders(response.data)))
    .catch((err) => console.log(err));
};

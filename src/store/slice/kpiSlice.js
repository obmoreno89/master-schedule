import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  totalNumberOfOrders: [],
  totalAmountOfOrders: [],
  ordersProgrammed: [],
  excessInventory: [],
  reload: false,
  skeletonNumberOrders: true,
  skeletonAmountOrders: true,
  skeletonOrdersProgrammed: true,
  skeletonExcessInventory: true,
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
    setExcessInventory: (state, action) => {
      state.excessInventory = action.payload;
    },
    setReload: (state, action) => {
      state.reload = !state.reload;
    },
    setSkeletonNumberOrders: (state, action) => {
      state.skeletonNumberOrders = action.reload;
    },
    setSkeletonAmountOrders: (state, action) => {
      state.skeletonAmountOrders = action.payload;
    },
    setSkeletonOrdersProgrammed: (state, action) => {
      state.skeletonOrdersProgrammed = action.payload;
    },
    setSkeletonExcessInventory: (state, action) => {
      state.skeletonExcessInventory = action.payload;
    },
  },
});

export const {
  setTotalNumberOfOrders,
  setTotalAmountOfOrders,
  setOrdersProgrammed,
  setExcessInventory,
  setReload,
  setSkeletonNumberOrders,
  setSkeletonAmountOrders,
  setSkeletonOrdersProgrammed,
  setSkeletonExcessInventory,
} = kpiSlice.actions;

export const selectTotalNumberOfOrders = (state) =>
  state.kpi.totalNumberOfOrders;
export const selectTotalAmountOfOrders = (state) =>
  state.kpi.totalAmountOfOrders;
export const selectOrdersProgrammed = (state) => state.kpi.ordersProgrammed;
export const selectExcessInventory = (state) => state.kpi.excessInventory;
export const selectReload = (state) => state.kpi.reload;
export const selectSkeletonNumberOrders = (state) =>
  state.kpi.skeletonNumberOrders;
export const selectSkeletonAmountOrders = (state) =>
  state.kpi.skeletonAmountOrders;
export const selectSkeletonOrdersProgrammed = (state) =>
  state.kpi.skeletonOrdersProgrammed;
export const selectSkeletonExcessInventoy = (state) =>
  state.kpi.skeletonExcessInventory;

export default kpiSlice.reducer;

export const getKpiNumberOfOrders = () => (dispatch) => {
  axios
    .get('http://44.211.175.241/api/kpis/orders-in-past-due')
    .then((response) => {
      if (response.status === 200) {
        dispatch(setSkeletonNumberOrders(false));
        dispatch(setTotalNumberOfOrders(response.data));
      }
    })
    .catch((err) => console.log(err));
};

export const getKpiAmountOfOrders = () => (dispatch) => {
  axios
    .get('http://44.211.175.241/api/kpis/total-amount-orders-in-past-due')
    .then((response) => {
      if (response.status === 200) {
        dispatch(setSkeletonAmountOrders(false));
        dispatch(setTotalAmountOfOrders(response.data));
      }
    })
    .catch((err) => console.log(err));
};

export const getOrdersProgrammed = () => (dispatch) => {
  axios
    .get('http://44.211.175.241/api/kpis/orders-without-ship-date')
    .then((response) => {
      if (response.status === 200) {
        dispatch(setSkeletonOrdersProgrammed(false));
        dispatch(setOrdersProgrammed(response.data));
      }
    })
    .catch((err) => console.log(err));
};

export const getExcessInventory = () => (dispatch) => {
  axios
    .get('http://44.211.175.241/api/kpis/excess-inventory')
    .then((response) => {
      if (response.status === 200) {
        dispatch(setSkeletonExcessInventory(false));
        dispatch(setExcessInventory(response.data));
      }
    })
    .catch((err) => console.log(err));
};

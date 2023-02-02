import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { endpointsCodes } from './functions';

const initialState = {
  openOrdersList: [],
  orgListFilter: [],
  loading: false,
  notFound: null,
  filterNameOrder: null,
};

const openOrdersSlice = createSlice({
  initialState,
  name: 'openOrders',
  reducers: {
    setOpenOrdersList: (state, action) => {
      state.openOrdersList = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setNotFound: (state, action) => {
      state.notFound = action.payload;
    },
    setOrgListFilter: (state, action) => {
      state.orgListFilter = action.payload;
    },
    setFilterNameOrder: (state, action) => {
      state.filterNameOrder = action.payload;
    },
  },
});

export const {
  setOpenOrdersList,
  setLoading,
  setNotFound,
  setOrgListFilter,
  setFilterNameOrder,
} = openOrdersSlice.actions;

export const selectOpenOrdersList = (state) => state.openOrders.openOrdersList;
export const selectLoading = (state) => state.openOrders.loading;
export const selectNotFound = (state) => state.openOrders.notFound;
export const selectOpenOrdersFilter = (state) => state.openOrders.orgListFilter;
export const selectFilterNameOrder = (state) =>
  state.openOrders.filterNameOrder;

export default openOrdersSlice.reducer;

export const getOpenOrdersList = () => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .get('http://35.174.106.95/api/open-orders/list/all')
    .then((response) => {
      if (response.status === 200) {
        dispatch(setLoading(false));
        dispatch(setOpenOrdersList(response.data.open_orders));
      }
    })
    .catch((error) => endpointsCodes(error, dispatch, setNotFound));
};

export const getOrgList = () => (dispatch) => {
  axios
    .get('http://35.174.106.95/api/open-orders/list-orgs')
    .then((response) => {
      if (response.status === 200) {
        dispatch(setOrgListFilter(response.data));
      }
    })
    .catch((error) => console.log(error));
};

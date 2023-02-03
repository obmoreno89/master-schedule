import { createSlice, createAction } from "@reduxjs/toolkit";
import axios from "axios";

import { endpointsCodes } from "./functions";

const initialState = {
  openOrdersList: [],
  orgListFilter: [],
  openOrdersDataFilter: [],
  loading: false,
  notFound: null,
  filterNameOrder: null,
  loadFilter: null,
  search: [],
};

export const revertAll = createAction("REVERT_ALL");
export const revertSearch = createAction("REVERT_SEARCH");

const openOrdersSlice = createSlice({
  initialState,
  name: "openOrders",
  extraReducers: (builder) => {
    builder.addCase(revertAll, () => initialState);
    builder.addCase(revertSearch, (state, action) => {
      state.search = [];
    });
  },
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
    setOpenOrdersDataFilter: (state, action) => {
      state.openOrdersDataFilter = action.payload;
    },
    setLoadFilter: (state, action) => {
      state.loadFilter = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const {
  setOpenOrdersList,
  setLoading,
  setNotFound,
  setOrgListFilter,
  setFilterNameOrder,
  setOpenOrdersDataFilter,
  setLoadFilter,
  setSearch,
} = openOrdersSlice.actions;

export const selectOpenOrdersList = (state) => state.openOrders.openOrdersList;
export const selectLoading = (state) => state.openOrders.loading;
export const selectNotFound = (state) => state.openOrders.notFound;
export const selectOpenOrdersFilter = (state) => state.openOrders.orgListFilter;
export const selectFilterNameOrder = (state) =>
  state.openOrders.filterNameOrder;
export const selectOpenOrdersDataFilter = (state) =>
  state.openOrders.openOrdersDataFilter;
export const selectLoadFilter = (state) => state.openOrders.loadFilter;
export const selectOpenOrSearch = (state) => state.openOrders.search;

export default openOrdersSlice.reducer;

export const getOpenOrdersList = () => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .get("http://35.174.106.95/api/open-orders/list/all")
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
    .get("http://35.174.106.95/api/open-orders/list-orgs")
    .then((response) => {
      if (response.status === 200) {
        dispatch(setOrgListFilter(response.data));
      }
    })
    .catch((error) => console.log(error));
};

export const getOpenOrdersDataFilter = (openOrdersName) => (dispatch) => {
  dispatch(setLoadFilter(true));
  axios
    .get(
      `http://35.174.106.95/api/open-orders/list-by-org?org=${openOrdersName}`
    )
    .then((response) => {
      if (response.status === 200) {
        dispatch(setLoadFilter(false));
        dispatch(setOpenOrdersDataFilter(response.data.open_orders));
      }
    })
    .then((error) => console.log(error));
};

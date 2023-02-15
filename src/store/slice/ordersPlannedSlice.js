import { createAction, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { endpointsCodes } from './functions';

const initialState = {
  orders: [],
  filterOptions: [],
  orgFiltered: null,
  filteredById: [],
  notFound: [],
  search: [],
  dataFiltered: [],
  loadData: false,
  loadDataFiltered: null,
  minMaxExport: [],
  fileExport: false,
};

export const revertAll = createAction('REVERT_ALL');
export const revertSearch = createAction('REVERT_SEARCH');

const ordersPlannedSlice = createSlice({
  initialState,
  name: 'orders',
  extraReducers: (builder) => {
    builder.addCase(revertAll, () => initialState);
    builder.addCase(revertSearch, (state, action) => {
      state.search = [];
    });
  },
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setFilterOptions: (state, action) => {
      state.filterOptions = action.payload;
    },
    setFilteredById: (state, action) => {
      state.filteredById = action.payload;
    },
    setNotFound: (state, action) => {
      state.notFound = action.payload;
    },
    setOrgFiltered: (state, action) => {
      state.orgFiltered = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setDataFiltered: (state, action) => {
      state.dataFiltered = action.payload;
    },
    setLoadData: (state, action) => {
      state.loadData = action.payload;
    },
    setLoadDataFiltered: (state, action) => {
      state.loadDataFiltered = action.payload;
    },
    setMinMaxExport: (state, action) => {
      state.minMaxExport = action.payload;
    },
    setFileExport: (state, action) => {
      state.fileExport = action.payload;
    },
  },
});

export const {
  setOrders,
  setFilterOptions,
  setFilteredById,
  setNotFound,
  setOrgFiltered,
  setSearch,
  setDataFiltered,
  setLoadData,
  setLoadDataFiltered,
  setMinMaxExport,
  setFileExport,
} = ordersPlannedSlice.actions;

export const selectOrders = (state) => state.orders.orders;
export const selectFilterOptions = (state) => state.orders.filterOptions;
export const selectFilteredById = (state) => state.orders.filteredById;
export const selectNotFound = (state) => state.orders.notFound;
export const selectOrgFiltered = (state) => state.orders.orgFiltered;
export const selectOrdersSearch = (state) => state.orders.search;
export const selectDataFiltered = (state) => state.orders.dataFiltered;
export const selectLoadData = (state) => state.orders.loadData;
export const selectLoadFiltered = (state) => state.orders.loadDataFiltered;
export const selectMinMaxExport = (state) => state.orders.minMaxExport;
export const selectFileExport = (state) => state.orders.fileExport;

export default ordersPlannedSlice.reducer;

export const getOrders = () => (dispatch) => {
  dispatch(setLoadData(true));
  axios
    .get('http://35.174.106.95/api/planning/report/list/all')
    .then((response) => {
      if (response.status === 200) {
        dispatch(setOrders(response.data));
      }
    })
    .catch((error) => {
      endpointsCodes(error, dispatch, setNotFound);
      dispatch(setLoadData(false));
    });
};

export const getFilterOptions = () => (dispatch) => {
  axios
    .get('http://35.174.106.95/api/planning/report/list/org')
    .then((response) => {
      if (response.status === 200) {
        dispatch(setFilterOptions(response.data));
      }
    })
    .catch((err) => endpointsCodes(err, dispatch, setNotFound));
};

export const getDataFiltered = (value) => (dispatch) => {
  dispatch(setLoadDataFiltered(true));
  axios
    .get(`http://35.174.106.95/api/planning/report/list?org=${value}`)
    .then((response) => {
      if (response.status === 200) {
        dispatch(setLoadDataFiltered(false));
        dispatch(setDataFiltered(response.data));
      }
    })
    .catch((err) => console.log(err));
};

export const getMinMaxExport = () => (dispatch) => {
  axios
    .get('http://35.174.106.95/api/planning/to-excel')
    .then((response) => {
      if (response.status === 200) {
        dispatch(setMinMaxExport(response.data));
        dispatch(setFileExport(true));
      }
    })
    .catch((error) => console.log(error));
};

import { createAction, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { endpointsCodes } from './functions';

const initialState = {
  orders: [],
  groups: [],
  sortOrder: [],
  planningsOption: [],
  typeSort: [],
  notFound: null,
};

export const revertAll = createAction('REVERT_ALL');

const planningSlice = createSlice({
  initialState,
  name: 'planning',
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
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
    setPlanningOption: (state, action) => {
      state.planningsOption = action.payload;
    },
    setTypeSort: (state, action) => {
      state.typeSort = action.payload;
    },
    setNotFound: (state, action) => {
      state.notFound = action.payload;
    },
  },
});

export const {
  setOrders,
  setGroups,
  setNotFound,
  setSortOrder,
  setPlanningOption,
  setTypeSort,
} = planningSlice.actions;

export const selectOrders = (state) => state.planning.orders;
export const selectGroups = (state) => state.planning.groups;
export const selectNotFound = (state) => state.planning.notFound;
export const selectSortOrder = (state) => state.planning.sortOrder;
export const selectPlanningsOption = (state) => state.planning.planningsOption;
export const selectTypeSort = (state) => state.planning.typeSort;

export default planningSlice.reducer;

export const getOrders = (data) => (dispatch) => {
  axios
    .post('http://44.211.175.241/api/open-orders/list', data)
    .then((response) => {
      if (response.status === 200) {
        dispatch(setOrders(response.data));
      }
    })
    .catch((error) => endpointsCodes(error, dispatch, setNotFound));
};

export const getSortOrder = () => (dispatch) => {
  axios
    .get('http://44.211.175.241/api/planning/list-criteria')
    .then((response) => {
      if (response.status === 200) {
        dispatch(setSortOrder(response.data.criteria));
      }
    })
    .catch((err) => console.log(err));
};

export const getTypeSort =
  (name, setChooseOption, setOrdersPanelOpen) => (dispatch) => {
    axios
      .get(`http://44.211.175.241/api/planning/order-by?criteria-name=${name}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch(setTypeSort(response.data));
          setChooseOption(true);
          setOrdersPanelOpen(false);
        }
      });
  };

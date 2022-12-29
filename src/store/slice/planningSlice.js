import { createAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { endpointsCodes } from "./functions";

const initialState = {
  orders: [],
  groups: [],
  sortOrder: [],
  notFound: null,
  listHistory: [],
  loadListHistory: true,
  search: []
};

export const revertAll = createAction("REVERT_ALL");
export const revertSearch = createAction("REVERT_SEARCH");

const planningSlice = createSlice({
  initialState,
  name: "planning",
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
    setGroups: (state, action) => {
      state.groups = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
    setNotFound: (state, action) => {
      state.notFound = action.payload;
    },
    setListHistory: (state, action) => {
      state.listHistory = action.payload;
    },
    setLoadHistory: (state, action) => {
      state.loadListHistory = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const {
  setOrders,
  setGroups,
  setNotFound,
  setSortOrder,
  setListHistory,
  setLoadHistory,
  setSearch
} = planningSlice.actions;

export const selectOrders = (state) => state.planning.orders;
export const selectGroups = (state) => state.planning.groups;
export const selectNotFound = (state) => state.planning.notFound;
export const selectSortOrder = (state) => state.planning.sortOrder;
export const selectListHistory = (state) => state.planning.listHistory;
export const selectLoadHistory = (state) => state.planning.loadListHistory;
export const selectHistorySearch = (state) => state.planning.search;

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

export const getSortOrder = () => (dispatch) => {
  axios
    .get("http://44.211.175.241/api/planning/list-criteria")
    .then((response) => {
      if (response.status === 200) {
        dispatch(setSortOrder(response.data));
      }
    })
    .catch((err) => console.log(err));
};

export const getListHistory = () => (dispatch) => {
  dispatch(setLoadHistory(true));
  axios
    .get("http://44.211.175.241/api/planning/list-history")
    .then((response) => {
      if (response.status === 200) {
        dispatch(setListHistory(response.data.history_planning));
      }
    })
    .catch(() => {
      dispatch(setLoadHistory(false));
    });
};

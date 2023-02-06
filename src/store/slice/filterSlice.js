import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  useFilter: [],
  idUserFilter: null,
  dataFilter: [],
};

const filterSlice = createSlice({
  initialState,
  name: 'filter',

  reducers: {
    setUserFilter: (state, action) => {
      state.useFilter = action.payload;
    },
    setIdUserFilter: (state, action) => {
      state.idUserFilter = action.payload;
    },
    setDataFilter: (state, action) => {
      state.dataFilter = action.payload;
    },
  },
});

export const { setUserFilter, setIdUserFilter, setDataFilter } =
  filterSlice.actions;

export const selectFilterUser = (state) => state.filter.useFilter;
export const selectIdUserFilter = (state) => state.filter.idUserFilter;
export const selectdataFilter = (state) => state.filter.dataFilter;

export default filterSlice.reducer;

export const getUserFilter = () => (dispatch) => {
  axios
    .get('http://35.174.106.95/api/planning/history-planning/list-users')
    .then((response) => {
      if (response.status === 200) {
        dispatch(setUserFilter(response.data.users));
      }
    })
    .catch((err) => console.log(err));
};

export const getDataFilter = (idFilter, id) => (dispatch) => {
  axios
    .get(
      `http://35.174.106.95/api/planning/history-planning/list?user-id=${
        idFilter || id
      }`
    )
    .then((response) => {
      if (response.status === 200) {
        dispatch(setDataFilter(response.data.history_planning));
      }
    })
    .catch((err) => console.log(err));
};

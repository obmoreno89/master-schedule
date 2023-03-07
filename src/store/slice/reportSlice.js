import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  reportList: [],
  reportFilter: [],
  valueFilter: null,
  dataFilter: [],
  dataReload: false,
};

const reportSlice = createSlice({
  initialState,
  name: 'report',
  reducers: {
    setReportList: (state, action) => {
      state.reportList = action.payload;
    },
    setReportFilter: (state, action) => {
      state.reportFilter = action.payload;
    },
    setValueFilter: (state, action) => {
      state.valueFilter = action.payload;
    },
    setDataFilter: (state, action) => {
      state.dataFilter = action.payload;
    },
    setDataReload: (state, action) => {
      state.dataReload = action.payload;
    },
  },
});

export const {
  setReportList,
  setReportFilter,
  setValueFilter,
  setDataFilter,
  setDataReload,
} = reportSlice.actions;

export const selectReportList = (state) => state.report.reportList;
export const selectReportFilter = (state) => state.report.reportFilter;
export const selectValueFilter = (state) => state.report.valueFilter;
export const selectDataFilter = (state) => state.report.dataFilter;
export const selectDataReload = (state) => state.report.dataReload;

export default reportSlice.reducer;

export const getReportList = () => (dispatch) => {
  axios
    .get('http://35.174.106.95/api/reports/pieces-planned')
    .then((response) => {
      if (response.status === 200) {
        dispatch(setReportList(response.data));
      }
    })
    .catch((err) => console.log(err));
};

export const getReportFilter = () => (dispatch) => {
  axios
    .get('http://35.174.106.95/api/reports/all-groups-assembly-line')
    .then((response) => {
      if (response.status === 200) {
        dispatch(setReportFilter(response.data));
      }
    })
    .catch((err) => console.log(err));
};

export const getDataFilter = (valueFilter) => (dispatch) => {
  dispatch(setDataReload(true));
  axios
    .get(
      `http://35.174.106.95/api/reports/pieces-planned-by?group-assembly-line=${valueFilter}`
    )
    .then((response) => {
      if (response.status === 200) {
        dispatch(setDataFilter(response.data));
      }
    })
    .catch((error) => console.log(error));
};

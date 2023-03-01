import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  reportList: [],
};

const reportSlice = createSlice({
  initialState,
  name: 'report',
  reducers: {
    setReportList: (state, action) => {
      state.reportList = action.payload;
    },
  },
});

export const { setReportList } = reportSlice.actions;

export const selectReportList = (state) => state.report.reportList;

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

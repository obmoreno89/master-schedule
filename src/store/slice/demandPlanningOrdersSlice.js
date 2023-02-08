import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { endpointsCodes } from './functions';

const initialState = {
  demandList: [],
  loading: false,
};

const demandPlanningOrdersSlice = createSlice({
  initialState,
  name: 'demandPlanningOrders',
  reducers: {
    setDemandList: (state, action) => {
      state.demandList = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setDemandList, setLoading } = demandPlanningOrdersSlice.actions;

export const selectDemandPlanning = (state) =>
  state.demandPlanningOrders.demandList;
export const selectLoading = (state) => state.demandPlanningOrders.loading;

export default demandPlanningOrdersSlice.reducer;

export const getDemandList =
  (letter, navigate, setGetPlanningReportModalOpen) => (dispatch) => {
    axios
      .get(`http://35.174.106.95/api/planning/report/demand?group=${letter}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch(setDemandList(response.data));
          setGetPlanningReportModalOpen(false);
          navigate('/mp-pro/planning/plannings/demand-planning/');
        }
      })
      .catch((error) => console.log(error));
  };

export const postDemandPlanningOrders = (changeName) => (dispatch) => {
  axios
    .post(
      'http://35.174.106.95/api/planning/new-order-planning/save-report',
      changeName
    )
    .then((response) => {
      if (response.status === 200) {
      }
    })
    .catch((error) => console.log(error));
};

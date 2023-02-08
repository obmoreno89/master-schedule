import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { endpointsCodes } from './functions';

const initialState = {
  demandList: [],
  demandLoading: false,
};

const demandPlanningOrdersSlice = createSlice({
  initialState,
  name: 'demandPlanningOrders',
  reducers: {
    setDemandList: (state, action) => {
      state.demandList = action.payload;
    },
    setDemandLoading: (state, action) => {
      state.demandLoading = action.payload;
    },
  },
});

export const { setDemandList, setDemandLoading } =
  demandPlanningOrdersSlice.actions;

export const selectDemandPlanning = (state) =>
  state.demandPlanningOrders.demandList;
export const selectDemandLoading = (state) =>
  state.demandPlanningOrders.demandLoading;

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
  dispatch(setDemandLoading(true));
  let data = { orders_report: changeName };
  const tokenUser = sessionStorage.getItem('token');
  axios
    .post(
      'http://35.174.106.95/api/planning/new-order-planning/save-report',
      data,
      {
        headers: { Authorization: `Token ${tokenUser}` },
      }
    )
    .then((response) => {
      if (response.status === 200) {
        dispatch(setDemandLoading(false));
        // TODO: Redirección a Planning
      }
    })
    .catch((error) => setDemandLoading(false));
};

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  demandList: [],
};

const demandPlanningOrdersSlice = createSlice({
  initialState,
  name: 'demandPlanningOrders',
  reducers: {
    setDemandList: (state, action) => {
      state.demandList = action.payload;
    },
  },
});

export const { setDemandList } = demandPlanningOrdersSlice.actions;

export const selectDemandPlanning = (state) =>
  state.demandPlanningOrders.demandList;

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

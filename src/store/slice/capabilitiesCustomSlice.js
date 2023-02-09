import { createSlice, createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import Loading from '../../pages/component/Loading';

import { endpointsCodes } from './functions';

const initialState = {
  capabilitiesCustomList: [],
};

const capabilitiesCustomSlice = createSlice({
  initialState,
  name: 'capabilitiesCustom',

  reducers: {
    setCapabilitiesCustomList: (state, action) => {
      state.capabilitiesCustomList = action.payload;
    },
  },
});

export const { setCapabilitiesCustomList } = capabilitiesCustomSlice.actions;

export const selectCapabilitiesCustom = (state) =>
  state.capabilitiesCustom.capabilitiesCustomList;

export default capabilitiesCustomSlice.reducer;

export const getCapabilitiesCustom = () => (dispatch) => {
  axios
    .get('http://35.174.106.95/api/capacities/list-custom-capacities')
    .then((response) => {
      if (response.status === 200) {
        dispatch(setCapabilitiesCustomList(response.data));
      }
    })
    .catch((error) => console.log(error));
};

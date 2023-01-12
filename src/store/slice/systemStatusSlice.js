import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  statusList: [],
};

const systemStatusSlice = createSlice({
  initialState,
  name: 'systemStatus',
  reducers: {
    setStatusList: (state, action) => {
      state.statusList = action.payload;
    },
  },
});

export const { setStatusList } = systemStatusSlice.actions;

export const selectStatusList = (state) => state.systemStatus.statusList;

export default systemStatusSlice.reducer;

export const getStatusList = () => (dispatch) => {
  axios
    .get('http://35.174.106.95/api/interfaces/list')
    .then((response) => {
      if (response.status === 200) {
        dispatch(setStatusList(response.data.interfaces));
      }
    })
    .catch((err) => console.log(err));
};

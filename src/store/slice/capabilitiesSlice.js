import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  groupList: [],
};

const capabilitiesSlice = createSlice({
  initialState,
  name: 'group',
  reducers: {
    setGroup: (state, action) => {
      state.groupList = action.payload;
    },
  },
});

export const { setGroup } = capabilitiesSlice.actions;

export const selectGroup = (state) => state.group.groupList;

export default capabilitiesSlice.reducer;

export const getGroupList = () => (dispatch) => {
  axios
    .get('http://44.211.175.241/api/capacities/list-groups')
    .then((response) => {
      dispatch(setGroup(response.data));
    })
    .catch((err) => console.log(err));
};

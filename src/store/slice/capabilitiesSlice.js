import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  groupList: [],
  producLines: [],
};

const capabilitiesSlice = createSlice({
  initialState,
  name: "group",
  reducers: {
    setGroup: (state, action) => {
      state.groupList = action.payload;
    },
    setProductLines: (state, action) => {
      state.producLines = action.payload;
    },
  },
});

export const { setGroup, setProductLines } = capabilitiesSlice.actions;

export const selectGroup = (state) => state.group.groupList;
export const selectPLines = (state) => state.group.producLines;

export default capabilitiesSlice.reducer;

export const getGroupList = () => (dispatch) => {
  axios
    .get("http://44.211.175.241/api/capacities/list-groups")
    .then((response) => {
      dispatch(setGroup(response.data));
    })
    .catch((err) => console.log(err));
};

export const getProductLines = () => (dispatch) => {
  axios
    .get("http://44.211.175.241/api/capacities/list-product-line")
    .then((response) => {
      dispatch(setProductLines(response.data));
    })
    .catch((err) => console.log(err));
};

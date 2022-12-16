import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  groupList: [],
  producLines: [],
  loading: null,
  capabilitiesList: [],
};

const capabilitiesSlice = createSlice({
  initialState,
  name: 'group',
  reducers: {
    setGroup: (state, action) => {
      state.groupList = action.payload;
    },
    setProductLines: (state, action) => {
      state.producLines = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCapabilitiesList: (state, action) => {
      state.capabilitiesList = action.payload;
    },
  },
});

export const { setGroup, setProductLines, setLoading, setCapabilitiesList } =
  capabilitiesSlice.actions;

export const selectGroup = (state) => state.group.groupList;
export const selectPLines = (state) => state.group.producLines;
export const selectLoading = (state) => state.group.loading;
export const selectCapabilitiesList = (state) => state.group.capabilitiesList;

export default capabilitiesSlice.reducer;

export const getGroupList = () => (dispatch) => {
  axios
    .get('http://44.211.175.241/api/capacities/list-groups')
    .then((response) => {
      dispatch(setGroup(response.data));
    })
    .catch((err) => console.log(err));
};

export const getProductLines = () => (dispatch) => {
  axios
    .get('http://44.211.175.241/api/capacities/list-product-line')
    .then((response) => {
      dispatch(setProductLines(response.data));
    })
    .catch((err) => console.log(err));
};

export const createPLines = (data, setOpenModalPL, reset) => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .post('http://44.211.175.241/api/capacities/create-product-line', data)
    .then((response) => {
      if (response.status === 201) {
        dispatch(setLoading(false));
        setOpenModalPL(false);
        reset;
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(setLoading(false));
    });
};

export const getCapabilitiesList = () => (dispatch) => {
  axios
    .get('http://44.211.175.241/api/capacities/list-default-capacities')
    .then((response) => {
      dispatch(setCapabilitiesList(response.data));
    })
    .catch((err) => console.log(err));
};

export const createGroup = (data, setOpenModalPL, reset) => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .post('http://44.211.175.241/api/capacities/create-product-line', data)
    .then((response) => {
      if (response.status === 201) {
        dispatch(setLoading(false));
        setOpenModalPL(false);
        reset;
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(setLoading(false));
    });
};

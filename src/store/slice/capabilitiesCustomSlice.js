import { createSlice, createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import Loading from '../../pages/component/Loading';

import { endpointsCodes } from './functions';

const initialState = {
  capabilitiesCustomList: [],
  realoadList: false,
};

const capabilitiesCustomSlice = createSlice({
  initialState,
  name: 'capabilitiesCustom',

  reducers: {
    setCapabilitiesCustomList: (state, action) => {
      state.capabilitiesCustomList = action.payload;
    },
    setReloadList: (state, action) => {
      state.realoadList = !state.realoadList;
    },
  },
});

export const { setCapabilitiesCustomList, setReloadList } =
  capabilitiesCustomSlice.actions;

export const selectCapabilitiesCustom = (state) =>
  state.capabilitiesCustom.capabilitiesCustomList;
export const selectReloadList = (state) => state.capabilitiesCustom.realoadList;

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

export const capabilitiesCustomCreate =
  (data, setCapabilitiesCustomCreateOpenPanel, reset) => (dispatch) => {
    const tokenUser = sessionStorage.getItem('token');
    axios
      .post('http://35.174.106.95/api/capacities/new-register', data, {
        headers: { Authorization: `Token ${tokenUser}` },
      })
      .then((response) => {
        if (response.status === 201) {
          dispatch(setReloadList());
          setCapabilitiesCustomCreateOpenPanel(false);
          reset();
        }
      })
      .catch((error) => console.log(error));
  };

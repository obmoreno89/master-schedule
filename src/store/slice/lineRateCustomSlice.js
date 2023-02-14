import { createSlice, createAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { endpointsCodes } from './functions';

const initialState = {
  LineRateCustomList: [],
  capablitiesCustomDeleteData: [],
  LineRateCustomEditData: [],
  capabCustomSearch: [],
  realoadList: false,
  loading: false,
};

export const revertEdit = createAction('REVERT_EDIT');
export const revertCapCustSearch = createAction('REVERT_SEARCH');

const lineRateCustomSlice = createSlice({
  initialState,
  name: 'LineRateCustom',
  extraReducers: (builder) => {
    builder.addCase(revertEdit, (state, action) => {
      state.LineRateCustomEditData = [];
    });
    builder.addCase(revertCapCustSearch, (state, action) => {
      state.capabCustomSearch = [];
    });
  },

  reducers: {
    setLineRateCustomList: (state, action) => {
      state.LineRateCustomList = action.payload;
    },
    setReloadList: (state, action) => {
      state.realoadList = !state.realoadList;
    },
    setLoading: (state, action) => {
      state.realoadList = action.payload;
    },
    setLineRateCustomDeleteData: (state, action) => {
      state.capablitiesCustomDeleteData = action.payload;
    },
    setLineRateCustomEditData: (state, action) => {
      state.LineRateCustomEditData = action.payload;
    },
    setCapCustomSearch: (state, action) => {
      state.capabCustomSearch = action.payload;
    },
  },
});

export const {
  setLineRateCustomList,
  setReloadList,
  setLoading,
  setLineRateCustomDeleteData,
  setLineRateCustomEditData,
  setCapCustomSearch,
} = lineRateCustomSlice.actions;

export const selectLineRateCustom = (state) =>
  state.LineRateCustom.LineRateCustomList;
export const selectReloadList = (state) => state.LineRateCustom.realoadList;
export const selectLoading = (state) => state.LineRateCustom.loading;
export const selectLineRateCustomDeleteData = (state) =>
  state.LineRateCustom.capablitiesCustomDeleteData;
export const selectLineRateCustomEditData = (state) =>
  state.LineRateCustom.LineRateCustomEditData;
export const selectCapCustomSearch = (state) =>
  state.LineRateCustom.capabCustomSearch;

export default lineRateCustomSlice.reducer;

export const getLineRateCustom = () => (dispatch) => {
  axios
    .get('http://35.174.106.95/api/capacities/list-custom-capacities')
    .then((response) => {
      if (response.status === 200) {
        dispatch(setLineRateCustomList(response.data));
      }
    })
    .catch((error) => console.log(error));
};

export const LineRateCustomCreate =
  (data, setLineRateCustomCreateOpenPanel, reset) => (dispatch) => {
    dispatch(setLoading(true));
    const tokenUser = sessionStorage.getItem('token');
    axios
      .post('http://35.174.106.95/api/capacities/new-register', data, {
        headers: { Authorization: `Token ${tokenUser}` },
      })
      .then((response) => {
        if (response.status === 201) {
          dispatch(setLoading(false));
          setLineRateCustomCreateOpenPanel(false);
          dispatch(setReloadList());
          reset();
        }
      })
      .catch((error) => {
        dispatch(setLoading(false));
      });
  };

export const LineRateCustomUpdate =
  (id, data, setLineRateCustomEditOpenPanel, reset) => (dispatch) => {
    dispatch(setLoading(true));
    const tokenUser = sessionStorage.getItem('token');
    axios
      .put(`http://35.174.106.95/api/capacities/custom-update/${id}/`, data, {
        headers: { Authorization: `Token ${tokenUser}` },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          dispatch(setLoading(false));
          setLineRateCustomEditOpenPanel(false);
          dispatch(setReloadList());
          dispatch(revertEdit());
          reset();
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(setLoading(false));
      });
  };

export const LineRateCustomDelete = (LineRateCustomId) => (dispatch) => {
  const token = sessionStorage.getItem('token');
  dispatch(setReloadList(true));
  axios
    .delete(
      `http://35.174.106.95/api/capacities/custom-delete/${LineRateCustomId}/`,
      {
        headers: { Authorization: `Token ${token}` },
      }
    )
    .then((response) => {
      if (response.status === 204) {
        dispatch(setReloadList(false));
      }
    })
    .catch((error) => dispatch(setReloadList(false)));
};

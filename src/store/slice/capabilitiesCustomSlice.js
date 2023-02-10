import { createSlice, createAction } from "@reduxjs/toolkit";
import axios from "axios";

import { endpointsCodes } from "./functions";

const initialState = {
  capabilitiesCustomList: [],
  capablitiesCustomDeleteData: [],
  capabilitiesCustomEditData: [],
  capabCustomSearch: [],
  realoadList: false,
  loading: false,
};

export const revertEdit = createAction("REVERT_EDIT");
export const revertCapCustSearch = createAction("REVERT_SEARCH");

const capabilitiesCustomSlice = createSlice({
  initialState,
  name: "capabilitiesCustom",
  extraReducers: (builder) => {
    builder.addCase(revertEdit, (state, action) => {
      state.capabilitiesCustomEditData = [];
    });
    builder.addCase(revertCapCustSearch, (state, action) => {
      state.capabCustomSearch = [];
    });
  },

  reducers: {
    setCapabilitiesCustomList: (state, action) => {
      state.capabilitiesCustomList = action.payload;
    },
    setReloadList: (state, action) => {
      state.realoadList = !state.realoadList;
    },
    setLoading: (state, action) => {
      state.realoadList = action.payload;
    },
    setCapabilitiesCustomDeleteData: (state, action) => {
      state.capablitiesCustomDeleteData = action.payload;
    },
    setCapabilitiesCustomEditData: (state, action) => {
      state.capabilitiesCustomEditData = action.payload;
    },
    setCapCustomSearch: (state, action) => {
      state.capabCustomSearch = action.payload;
    },
  },
});

export const {
  setCapabilitiesCustomList,
  setReloadList,
  setLoading,
  setCapabilitiesCustomDeleteData,
  setCapabilitiesCustomEditData,
  setCapCustomSearch,
} = capabilitiesCustomSlice.actions;

export const selectCapabilitiesCustom = (state) =>
  state.capabilitiesCustom.capabilitiesCustomList;
export const selectReloadList = (state) => state.capabilitiesCustom.realoadList;
export const selectLoading = (state) => state.capabilitiesCustom.loading;
export const selectCapabilitiesCustomDeleteData = (state) =>
  state.capabilitiesCustom.capablitiesCustomDeleteData;
export const selectCapabilitiesCustomEditData = (state) =>
  state.capabilitiesCustom.capabilitiesCustomEditData;
export const selectCapCustomSearch = (state) =>
  state.capabilitiesCustom.capabCustomSearch;

export default capabilitiesCustomSlice.reducer;

export const getCapabilitiesCustom = () => (dispatch) => {
  axios
    .get("http://35.174.106.95/api/capacities/list-custom-capacities")
    .then((response) => {
      if (response.status === 200) {
        dispatch(setCapabilitiesCustomList(response.data));
      }
    })
    .catch((error) => console.log(error));
};

export const capabilitiesCustomCreate =
  (
    data,
    setCapabilitiesCustomCreateOpenPanel,
    reset,
  ) =>
  (dispatch) => {
    dispatch(setLoading(true));
    const tokenUser = sessionStorage.getItem("token");
    axios
      .post("http://35.174.106.95/api/capacities/new-register", data, {
        headers: { Authorization: `Token ${tokenUser}` },
      })
      .then((response) => {
        if (response.status === 201) {
          dispatch(setLoading(false));
          setCapabilitiesCustomCreateOpenPanel(false);
          dispatch(setReloadList());
          reset();
        }
      })
      .catch((error) => {
        dispatch(setLoading(false));
      });
  };

export const capabilitiesCustomUpdate =
  (id, data, setCapabilitiesCustomEditOpenPanel, reset) => (dispatch) => {
    dispatch(setLoading(true));
    const tokenUser = sessionStorage.getItem("token");
    axios
      .put(`http://35.174.106.95/api/capacities/custom-update/${id}/`, data, {
        headers: { Authorization: `Token ${tokenUser}` },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          dispatch(setLoading(false));
          setCapabilitiesCustomEditOpenPanel(false);
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

export const capabilitiesCustomDelete =
  (capabilitiesCustomId) => (dispatch) => {
    const token = sessionStorage.getItem("token");
    dispatch(setReloadList(true));
    axios
      .delete(
        `http://35.174.106.95/api/capacities/custom-delete/${capabilitiesCustomId}/`,
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

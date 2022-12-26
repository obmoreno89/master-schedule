import { createAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  groupList: [],
  groupEdit: [],
  groupDelete: [],
  producLines: [],
  loading: null,
  capabilitiesList: [],
  capabilitiesSearch: [],
  reload: false,
};

export const revertSearch = createAction("REVERT_SEARCH");
export const revertGroupEdit = createAction("REVERT_GROUPEDIT");
export const revertGroupDelete = createAction("REVERT_GROUPDELETE");

const capabilitiesSlice = createSlice({
  initialState,
  name: "group",
  extraReducers: (builder) => {
    builder.addCase(revertSearch, (state, action) => {
      state.capabilitiesSearch = [];
    });
    builder.addCase(revertGroupEdit, (state, action) => {
      state.groupEdit = [];
    });
    builder.addCase(revertGroupDelete, (state, action) => {
      state.groupDelete = [];
    });
  },
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
    setCapabilitiesSearch: (state, action) => {
      state.capabilitiesSearch = action.payload;
    },
    setReload: (state, action) => {
      state.reload = !state.reload;
    },
    setGroupEdit: (state, action) => {
      state.groupEdit = action.payload;
    },
    setGroupDelete: (state, action) => {
      state.groupDelete = action.payload;
    },
  },
});

export const {
  setGroup,
  setProductLines,
  setLoading,
  setCapabilitiesList,
  setCapabilitiesSearch,
  setReload,
  setGroupEdit,
  setGroupDelete,
} = capabilitiesSlice.actions;

export const selectGroup = (state) => state.group.groupList;
export const selectPLines = (state) => state.group.producLines;
export const selectLoading = (state) => state.group.loading;
export const selectCapabilitiesList = (state) => state.group.capabilitiesList;
export const selectCapabilitiesSearch = (state) =>
  state.group.capabilitiesSearch;
export const selectReload = (state) => state.group.reload;
export const selectGroupEdit = (state) => state.group.groupEdit;
export const selectGroupDelete = (state) => state.group.groupDelete;

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

export const createPLines = (data, setOpenModalPL, reset) => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .post("http://44.211.175.241/api/capacities/create-product-line", data)
    .then((response) => {
      if (response.status === 201) {
        dispatch(setLoading(false));
        setOpenModalPL(false);
        reset;
        dispatch(setReload());
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(setLoading(false));
    });
};

export const getCapabilitiesList = (data) => (dispatch) => {
  axios
    .get("http://44.211.175.241/api/capacities/list-default-capacities")
    .then((response) => {
      dispatch(setCapabilitiesList(response.data));
    })
    .catch((err) => console.log(err));
};

export const createGroup = (data, setOpenModalGroup, reset) => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .post("http://44.211.175.241/api/capacities/new-group", data)
    .then((response) => {
      if (response.status === 200) {
        dispatch(setLoading(false));
        setOpenModalGroup(false);
        reset();
        dispatch(setReload());
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(setLoading(false));
    });
};

export const editGroup = (data, id, setOpenModalGroupEdit) => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .put(`http://44.211.175.241/api/capacities/update-group/${id}/`, data)
    .then((response) => {
      if (response.status === 200) {
        dispatch(setLoading(false));
        setOpenModalGroupEdit(false);
        dispatch(setReload());
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(setLoading(false));
    });
};

export const deleteGroup = (id, setOpenModalGroupDelete) => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .delete(`http://44.211.175.241/api/capacities/delete-group/${id}/`)
    .then((response) => {
      if (response.status === 204) {
        dispatch(setLoading(false));
        setOpenModalGroupDelete(false);
        dispatch(setReload());
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(setLoading(false));
    });
};

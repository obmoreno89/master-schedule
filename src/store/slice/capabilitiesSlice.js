import { createAction, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  groupList: [],
  groupEdit: [],
  groupDelete: [],
  producLines: [],
  plEdit: [],
  plDelete: [],
  loading: null,
  capabilitiesList: [],
  capabilitiesSearch: [],
  reload: false,
  error: false,
};

export const revertSearch = createAction('REVERT_SEARCH');
export const revertGroupEdit = createAction('REVERT_GROUPEDIT');
export const revertGroupDelete = createAction('REVERT_GROUPDELETE');
export const revertPLEdit = createAction('REVERT_PLEDIT');
export const revertPList = createAction('REVERT_PLIST');
export const revertPLDelete = createAction('REVERT_PLDELETE');
export const revertError = createAction('REVERT_ERROR');

const capabilitiesSlice = createSlice({
  initialState,
  name: 'group',
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
    builder.addCase(revertPLEdit, (state, action) => {
      state.plEdit = [];
    });
    builder.addCase(revertPLDelete, (state, action) => {
      state.plDelete = [];
    });
    builder.addCase(revertPList, (state, action) => {
      state.capabilitiesList = [];
    });
    builder.addCase(revertError, (state, action) => {
      state.error = false;
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
    setPLEdit: (state, action) => {
      state.plEdit = action.payload;
    },
    setPLDelete: (state, action) => {
      state.plDelete = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
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
  setPLEdit,
  setPLDelete,
  setError,
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
export const selectPLEdit = (state) => state.group.plEdit;
export const selectPLDelete = (state) => state.group.plDelete;
export const selectError = (state) => state.group.error;

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
        reset();
        dispatch(setReload());
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(setLoading(false));
    });
};

export const editPLine = (data, id, setOpenModalPLEdit) => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .put(`http://44.211.175.241/api/capacities/update-product-line/${id}`, data)
    .then((response) => {
      if (response.status === 200) {
        dispatch(setLoading(false));
        setOpenModalPLEdit(false);
        dispatch(setReload());
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(setLoading(false));
      dispatch(setError(true));
    });
};

export const deletePLine = (id, setOpenModalPLDelete) => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .delete(`http://44.211.175.241/api/capacities/delete-product-line/${id}`)
    .then((response) => {
      if (response.status === 200) {
        dispatch(setLoading(false));
        setOpenModalPLDelete(false);
        dispatch(setReload());
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(setLoading(false));
      dispatch(setError(true));
    });
};

export const getCapabilitiesList = () => (dispatch) => {
  axios
    .get('http://44.211.175.241/api/capacities/list-default-capacities')
    .then((response) => {
      dispatch(setCapabilitiesList(response.data));
      dispatch(setReload());
    })
    .catch((err) => console.log(err));
};

export const createCapabilities =
  (data, setCapabilitiesOpenPanel, reset) => (dispatch) => {
    dispatch(setLoading(true));
    const userId = sessionStorage.getItem('id');
    axios
      .post(
        `http://44.211.175.241/api/capacities/new-register-default/${userId}/`,
        data
      )
      .then((response) => {
        if (response.status === 201) {
          dispatch(setLoading(false));
          setCapabilitiesOpenPanel(false);
          reset();
          dispatch(setReload());
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(setLoading(false));
      });
  };

export const createGroup = (data, setOpenModalGroup, reset) => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .post('http://44.211.175.241/api/capacities/new-group', data)
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
      dispatch(setError(true));
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
      dispatch(setError(true));
    });
};

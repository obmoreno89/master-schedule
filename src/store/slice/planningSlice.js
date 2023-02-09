import { createAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { endpointsCodes } from "./functions";

const initialState = {
  ganttLoading: false,
  fullLoading: false,
  planningList: [],
  orders: [],
  groups: [],
  sortOrder: [],
  planningsOption: [],
  typeSort: [],
  notFound: null,
  listHistory: [],
  loadListHistory: null,
  loadPlanning: true,
  search: [],
  planningId: [],
  planningValues: {
    group: null,
    criteria: [],
  },
  allTypes: {
    eto: null,
    "abc code": null,
    "amount (total order)": null,
    "request date": null,
    "schedule ship date": null,
  },
};

export const revertAll = createAction("REVERT_ALL");
export const revertSearch = createAction("REVERT_SEARCH");
export const revertPlanning = createAction("REVERT_PLANNING");
export const revertPlanningList = createAction("REVERT_PLAN_LIST");

const planningSlice = createSlice({
  initialState,
  name: "planning",
  extraReducers: (builder) => {
    builder.addCase(revertAll, () => initialState);
    builder.addCase(revertSearch, (state, action) => {
      state.search = [];
    });
    builder.addCase(revertPlanning, (state, action) => {
      state.planningValues = initialState.planningValues;
    });
    builder.addCase(revertPlanningList, (state, action) => {
      state.planningList = [];
    });
  },
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setGroups: (state, action) => {
      state.groups = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
    setPlanningOption: (state, action) => {
      state.planningsOption = action.payload;
    },
    setTypeSort: (state, action) => {
      state.typeSort = action.payload;
    },
    setNotFound: (state, action) => {
      state.notFound = action.payload;
    },
    setListHistory: (state, action) => {
      state.listHistory = action.payload;
    },
    setLoadHistory: (state, action) => {
      state.loadListHistory = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setPlanningId: (state, action) => {
      state.planningId = action.payload;
    },
    setPlanningValues: (state, action) => {
      state.planningValues[action.payload.item] = action.payload.value;
    },
    setGanttLoading: (state, action) => {
      state.ganttLoading = action.payload;
    },
    setAllTypes: (state, action) => {
      state.allTypes[action.payload.item] = action.payload.value;
    },
    setPlanningList: (state, action) => {
      state.planningList = action.payload;
    },
    setFullLoading: (state, action) => {
      state.fullLoading = action.payload;
    },
    setLoadPlanning: (state, action) => {
      state.loadPlanning = action.payload;
    },
  },
});

export const {
  setOrders,
  setGroups,
  setNotFound,
  setSortOrder,
  setListHistory,
  setLoadHistory,
  setSearch,
  setTypeSort,
  setPlanningOption,
  setPlanningId,
  setPlanningValues,
  setGanttLoading,
  setAllTypes,
  setPlanningList,
  setFullLoading,
  setLoadPlanning,
} = planningSlice.actions;

export const selectOrders = (state) => state.planning.orders;
export const selectGroups = (state) => state.planning.groups;
export const selectNotFound = (state) => state.planning.notFound;
export const selectSortOrder = (state) => state.planning.sortOrder;
export const selectListHistory = (state) => state.planning.listHistory;
export const selectLoadHistory = (state) => state.planning.loadListHistory;
export const selectHistorySearch = (state) => state.planning.search;
export const selectTypeSort = (state) => state.planning.typeSort;
export const selectPlanningsOption = (state) => state.planning.planningsOption;
export const selectPlanningId = (state) => state.planning.planningId;
export const selectPlanning = (state) => state.planning.planningValues;
export const selectGanttLoading = (state) => state.planning.ganttLoading;
export const selectAllTypes = (state) => state.planning.allTypes;
export const selectPlanningList = (state) => state.planning.planningList;
export const selectFullLoading = (state) => state.planning.fullLoading;
export const selectLoadPlanning = (state) => state.planning.loadPlanning;

export default planningSlice.reducer;

const sortCriteria = (criteria) => {
  let sortOrder = [
    "ETO",
    "ABC Code",
    "Amount (Total Order)",
    "Request Date",
    "Schedule Ship Date",
  ];

  criteria.sort(function (a, b) {
    return sortOrder.indexOf(a.name) - sortOrder.indexOf(b.name);
  });

  return criteria;
};

export const getOrders = (data) => (dispatch) => {
  axios
    .post("http://35.174.106.95/api/open-orders/list", data)
    .then((response) => {
      if (response.status === 200) {
        dispatch(setOrders(response.data));
      }
    })
    .catch((error) => endpointsCodes(error, dispatch, setNotFound));
};

export const getSortOrder = () => (dispatch) => {
  axios
    .get("http://35.174.106.95/api/planning/list-criteria")
    .then((response) => {
      if (response.status === 200) {
        dispatch(setSortOrder(sortCriteria(response.data.criteria)));
      }
    })
    .catch((err) => console.log(err));
};

export const getListHistory = () => (dispatch) => {
  dispatch(setLoadHistory(true));
  axios
    .get("http://35.174.106.95/api/planning/list-history")
    .then((response) => {
      if (response.status === 200) {
        dispatch(setListHistory(response.data.history_planning));
      }
    })
    .catch(() => {
      dispatch(setLoadHistory(false));
    });
};

export const getTypeSort =
  (name, setChooseOption, setOrdersPanelOpen) => (dispatch) => {
    axios
      .get(`http://35.174.106.95/api/planning/order-by?criteria-name=${name}`)
      .then((response) => {
        if (response.status === 200) {
          setChooseOption(true);
          setOrdersPanelOpen(false);
          dispatch(setTypeSort(response.data));
        }
      })
      .catch((err) => console.log(err));
  };

export const getAllTypes = (name) => (dispatch) => {
  axios
    .get(`http://35.174.106.95/api/planning/order-by?criteria-name=${name}`)
    .then((response) => {
      if (response.status === 200) {
        dispatch(setAllTypes({ item: name, value: response.data }));
      }
    })
    .catch((err) => console.log(err));
};

export const generatePlanningFromSalesOrder =
  (data, navigate) => (dispatch) => {
    const token = sessionStorage.getItem("token");
    dispatch(setGanttLoading(true));
    dispatch(setFullLoading(true));
    axios
      .post(
        `http://35.174.106.95/api/planning/new-order-planning/save-sales-order`,
        data,
        {
          headers: { Authorization: `Token ${token}` },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          navigate(`/mp-pro/planning/plannings/`);
          dispatch(setFullLoading(false));
          dispatch(setGanttLoading(false));
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(setGanttLoading(false));
        dispatch(setFullLoading(false));
      });
  };

export const getPlanningList = () => (dispatch) => {
  dispatch(setLoadPlanning(true));
  axios
    .get("http://35.174.106.95/api/planning/orders-planning/list")
    .then((response) => {
      if (response.status === 200) {
        dispatch(setPlanningList(response.data));
        dispatch(setLoadPlanning(false));
      }
    })
    .catch(() => dispatch(setLoadPlanning(false)));
};

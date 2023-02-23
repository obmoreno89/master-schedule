import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  deleteLoading: false,
};

const ganttSlice = createSlice({
  initialState,
  name: 'gantt',
  reducers: {
    setDelete: (state, action) => {
      state.deleteLoading = action.payload;
    },
  },
});

export const { setDelete } = ganttSlice.actions;

export const selectDeleteLoading = (state) => state.gantt.deleteLoading;

export default ganttSlice.reducer;

export const deleteGantt =
  (ganttData, navigate, setHiddenSidebar, setModalAlertGanttOpen) =>
  (dispatch) => {
    axios
      .delete('http://35.174.106.95/api/planning/discard-planning', {
        data: ganttData,
      })
      .then((response) => {
        if (response.status === 200) {
          navigate('/mp-pro/planning/plannings/');
          setHiddenSidebar(false);
          setModalAlertGanttOpen(false);
        }
      })
      .catch((err) => console.log(err));
  };

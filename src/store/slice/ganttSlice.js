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
  (ganttData, setModalAlertGanttOpen, navigate) => (dispatch) => {
    axios
      .delete('api/planning/discard-planning', ganttData)
      .then((response) => {
        if (response.status === 200) {
          sessionStorage.removeItem('saved');
          console.log(response.data);
          setModalAlertGanttOpen(false);
          navigate('/mp-pro/');
        }
      })
      .catch((err) => console.log(err));
  };

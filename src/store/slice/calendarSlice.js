import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  datelist: [],
  loading: null,
};

const calendarSlice = createSlice({
  initialState,
  name: 'calendar',
  reducers: {
    setCalendar: (state, action) => {
      state.datelist = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setCalendar, setLoading } = calendarSlice.actions;

export const selectDate = (state) => state.calendar.datelist;

export default calendarSlice.reducer;

export const getDate = () => (dispatch) => {
  axios
    .get('http://44.211.175.241/api/calendar/list-all-non-working-day')
    .then((response) => dispatch(setCalendar(response.data)))
    .catch((err) => console.log(err));
};

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
export const selectLoading = (state) => state.calendar.loading;

export default calendarSlice.reducer;

export const getDate = () => (dispatch) => {
  axios
    .get('http://44.211.175.241/api/calendar/list-all-non-working-day')
    .then((response) => dispatch(setCalendar(response.data)))
    .catch((err) => console.log(err));
};

export const addHoliday = (data, setOpenModalCalendar, reset) => (dispatch) => {
  dispatch(setLoading(true));
  const id = sessionStorage.getItem('id');
  axios
    .post(
      `http://44.211.175.241/api/calendar/register-non-working-day/${id}/`,
      data
    )
    .then((response) => {
      if (response.status === 201) {
        console.log(response.data);
        dispatch(setLoading(false));
        reset();
        setOpenModalCalendar(false);
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(setLoading(false));
    });
};

export const deleteHoliday = (eventId, setDropdownOpen) => (dispatch) => {
  axios
    .delete(
      `http://44.211.175.241/api/calendar/delete-non-working-day/${eventId}/`
    )
    .then((response) => {
      if (response.status === 204) {
        setDropdownOpen(false);
      }
    })
    .catch((err) => console.log(err));
};

export const editHoliday =
  (data, setOpenModalCalendarEdit, setReloadEvent) => (dispatch) => {
    dispatch(setLoading(true));
    const idEvent = sessionStorage.getItem('idEvent');

    axios
      .put(
        `http://44.211.175.241/api/calendar/update-non-working-day/${idEvent}/`,
        data
      )
      .then((response) => {
        if (response.status === 200) {
          dispatch(setLoading(false));
          setOpenModalCalendarEdit(false);
        }
        setReloadEvent(false);
      })
      .catch((err) => dispatch(setLoading(false)));
  };

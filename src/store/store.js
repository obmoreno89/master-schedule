import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slice/authSlice';
import usersSlice from './slice/usersSlice';
import capabilitiesSlice from './slice/capabilitiesSlice';
import calendarSlice from './slice/calendarSlice';
import planningSlice from './slice/planningSlice';
import kpiSlice from './slice/kpiSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    users: usersSlice,
    group: capabilitiesSlice,
    calendar: calendarSlice,
    planning: planningSlice,
    kpi: kpiSlice,
  },
});

export default store;

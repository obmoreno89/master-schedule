import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slice/authSlice';
import usersSlice from './slice/usersSlice';
import capabilitiesSlice from './slice/capabilitiesSlice';
import calendarSlice from './slice/calendarSlice';
import planningSlice from './slice/planningSlice';
import kpiSlice from './slice/kpiSlice';
import systemStatusSlice from './slice/systemStatusSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    users: usersSlice,
    group: capabilitiesSlice,
    calendar: calendarSlice,
    planning: planningSlice,
    kpi: kpiSlice,
    systemStatus: systemStatusSlice,
  },
});

export default store;

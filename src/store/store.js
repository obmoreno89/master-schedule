import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slice/authSlice';
import usersSlice from './slice/usersSlice';
import capabilitiesSlice from './slice/capabilitiesSlice';
import calendarSlice from './slice/calendarSlice';
import planningSlice from './slice/planningSlice';
import kpiSlice from './slice/kpiSlice';
import systemStatusSlice from './slice/systemStatusSlice';
import filterSlice from './slice/filterSlice';
import ordersPlannedSlice from './slice/ordersPlannedSlice';
import openOrdersSlice from './slice/openOrdersSlice';
import demandPlanningOrdersSlice from './slice/DemandPlanningOrdersSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    users: usersSlice,
    group: capabilitiesSlice,
    calendar: calendarSlice,
    planning: planningSlice,
    kpi: kpiSlice,
    systemStatus: systemStatusSlice,
    filter: filterSlice,
    orders: ordersPlannedSlice,
    openOrders: openOrdersSlice,
    demandPlanningOrders: demandPlanningOrdersSlice,
  },
});

export default store;

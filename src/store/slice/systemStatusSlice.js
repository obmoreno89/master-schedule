import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  statusList: [],
};

const systemStatusSlice = createSlice({
  initialState,
  name: 'systemStatus',
  reducers: {
    setStatusList: (state, action) => {
      state.statusList = action.payload;
    },
  },
});

export const { setStatusList } = systemStatusSlice.actions;

export const selectStatusList = (state) => state.systemStatus.statusList;

export default systemStatusSlice.reducer;

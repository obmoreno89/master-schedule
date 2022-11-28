import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import usersSlice from "./slice/usersSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    users: usersSlice,
  },
});

export default store;

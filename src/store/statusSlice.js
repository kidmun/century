import { createSlice } from "@reduxjs/toolkit";

const statusSlice = createSlice({
  name: "status",
  initialState: {
    notification: null,
  },
  reducers: {
    turnNotification(state, action) {
      state.notification = action.payload;
    },
    turnoffNotification(state, action) {
      state.notification = null;
    },
  },
});

export const statusActions = statusSlice.actions;
export default statusSlice;

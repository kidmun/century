import { configureStore } from "@reduxjs/toolkit";
import statusSlice from "./statusSlice";

export const store = configureStore({
  reducer: {
    status: statusSlice.reducer,

  },
});

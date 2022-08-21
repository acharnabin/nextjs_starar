import { configureStore, t } from "@reduxjs/toolkit";
import TestSliceSlice from "./TestSlice";


export const store = configureStore({
  reducer: {
   
    testSlice:TestSliceSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

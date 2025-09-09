import { configureStore } from "@reduxjs/toolkit";
import mobileSidebarReducer from "./mobileSidebarSlice";
import logisticsReducer from "./logisticSlice";

export const store = configureStore({
  reducer: {
    mobileSidebar: mobileSidebarReducer,
    logistics: logisticsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

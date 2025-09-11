import { configureStore } from "@reduxjs/toolkit";
import mobileSidebarReducer from "./mobileSidebarSlice";
import logisticsReducer from "./logisticSlice";
import faqReducer from "./faqSlice";

export const store = configureStore({
  reducer: {
    mobileSidebar: mobileSidebarReducer,
    logistics: logisticsReducer,
    faq: faqReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

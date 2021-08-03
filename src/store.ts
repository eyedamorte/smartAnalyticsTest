import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reportReducer from "./features/report/ReportSlice";

const RootReducer = combineReducers({
  report: reportReducer,
});

export type RootReducerType = ReturnType<typeof RootReducer>;

const Store = configureStore({
  reducer: RootReducer,
});

export default Store;

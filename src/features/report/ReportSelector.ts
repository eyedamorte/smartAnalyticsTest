import { createSelector } from "@reduxjs/toolkit";

import type { ReportStateType } from "./reportTypes";
import type { RootReducerType } from "../../store";

export const getDataset = createSelector<
  RootReducerType,
  ReportStateType["dataset"],
  ReportStateType["dataset"]
>(
  (state) => state.report.dataset,
  (value) => value
);

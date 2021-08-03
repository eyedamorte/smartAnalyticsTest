import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import type { ReportStateType } from "./reportTypes";
import products from "../../data";

const ReducerName = "Report";

const InitialState: ReportStateType = {
  dataset: null,
  isPending: false,
};

export const getReportDatasetThunk = createAsyncThunk(
  `${ReducerName}/getDataset`,
  async ({}: {}) => {
    // мокаю данные, имитируя запрос)
    const response = await new Promise<{ data: ReportStateType["dataset"] }>(
      (resolve) => {
        resolve({ data: products });
      }
    );
    return response;
  }
);

export const ReportSlice = createSlice({
  name: ReducerName,
  initialState: InitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReportDatasetThunk.pending, (state) => {
      state.isPending = true;
    });
    builder.addCase(getReportDatasetThunk.fulfilled, (state, action) => {
      state.dataset = action.payload.data;
      state.isPending = false;
    });
    builder.addCase(getReportDatasetThunk.rejected, (state) => {
      state.isPending = false;
    });
  },
});

export default ReportSlice.reducer;

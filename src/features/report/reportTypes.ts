import type { DataRow } from "../../data";

export type ReportStateType = {
  dataset: DataRow[] | null;
  isPending: boolean;
};

export type modeType = "goods" | "categories";

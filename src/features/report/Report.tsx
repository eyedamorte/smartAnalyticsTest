import React, { FC, useEffect, useState } from "react";

import type { DataRow } from "../../data";
import type { modeType } from "./reportTypes";

import { useSelector, useDispatch } from "react-redux";
import Control from "../control/Сontrol";

import { getLastYear, getYearsList } from "../../services/reportChartService";

import { getReportDatasetThunk } from "./ReportSlice";
import { getDataset } from "./ReportSelector";
import ReportChart from "../charts/ReportChart";

interface ReportPropsType {}

const Report: FC<ReportPropsType> = ({}) => {
  const dispatch = useDispatch();

  const dataset = useSelector(getDataset);

  const [year, setYear] = useState<DataRow["year"]>();
  const [mode, setMode] = useState<modeType>("goods");

  useEffect(() => {
    dispatch(getReportDatasetThunk({}));
    if (dataset) {
      setYear(getLastYear(dataset));
    }
  }, [dataset]);

  return (
    <div>
      <Control
        year={year}
        setYear={setYear}
        yearsList={getYearsList(dataset)}
        setMode={setMode}
        mode={mode}
      />
      {year}
      <ReportChart dataset={dataset} year={year} mode={mode} />
    </div>
  );
};

export default Report;

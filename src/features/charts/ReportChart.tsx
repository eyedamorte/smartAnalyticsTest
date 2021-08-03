import React, { FC, useState, useEffect } from "react";

import type { ReportStateType, modeType } from "../report/reportTypes";
import type { DataRow } from "../../data";
import type { Options as ChartOptionsType } from "highcharts";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { getSeries } from '../../services/reportChartService'

interface ReportChartPropsType {
  year?: DataRow["year"];
  mode: modeType;
  dataset: ReportStateType["dataset"];
}

const ReportChart: FC<ReportChartPropsType> = ({ year, mode, dataset }) => {
  const [ChartOptions, setChartOptions] = useState<ChartOptionsType>({
    chart: {
      type: "scatter",
      zoomType: "xy",
    },
    title: {
      text: `Scatter of Products in '${mode}' mode`,
    },
    subtitle: {
      text: `Source: ${year} year`,
    },
    xAxis: {
      title: {
        text: "feature1",
      },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true,
    },
    yAxis: {
      title: {
        text: "feature2",
      },
    },
    plotOptions: {
      scatter: {
        marker: {
          radius: 5,
          states: {
            hover: {
              enabled: true,
              lineColor: "rgb(100,100,100)",
            },
          },
        },
        tooltip: {
          headerFormat: "<b>{series.name}</b><br>",
          pointFormat: "{point.x} feature1, {point.y} feature2",
        },
      },
    },
    legend: {
      layout: "vertical",
      align: "left",
      verticalAlign: "top",
      x: 100,
      y: 70,
      floating: true,
      backgroundColor: "white",
      borderWidth: 1,
    },
    series: [],
  });

  useEffect(() => {
    setChartOptions({
      title: {
        text: `Scatter of Products in '${mode}' mode`,
      },
      subtitle: {
        text: `Source: ${year} year`,
      },
    });
  }, [year, mode]);



  useEffect(() => {
    if (year && dataset && dataset) {
      setChartOptions({
        series: getSeries(dataset,mode, year),
      });
    }
  }, [year, mode, dataset]);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={ChartOptions} />
    </div>
  );
};

export default ReportChart;

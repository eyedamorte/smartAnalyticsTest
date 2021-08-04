import React, { FC, useState, useEffect } from "react";

import type { ReportStateType, modeType } from "../report/reportTypes";
import type { DataRow } from "../../data";
import type { Options as ChartOptionsType } from "highcharts";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { getSeries } from "../../services/reportChartService";

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
      floating: false,
      backgroundColor: "white",
      borderWidth: 1,
    },
    series: [],
    responsive: {
      rules: [{
          condition: {
              maxWidth: 500
          },
          chartOptions: {
              legend: {
                  align: 'center',
                  verticalAlign: 'bottom',
                  layout: 'horizontal'
              },
              yAxis: {
                  labels: {
                      align: 'left',
                      x: 0,
                      y: -5
                  },
                  title: {
                      text: null
                  }
              },
              subtitle: {
                  text: undefined
              },
              credits: {
                  enabled: false
              }
          }
      }]
  }
  });

  useEffect(() => {
    if (year && dataset && dataset) {
      console.log(getSeries(dataset, mode, year));

      setChartOptions({
        title: {
          text: `Scatter of Products in '${mode}' mode`,
        },
        subtitle: {
          text: `Source: ${year} year`,
        },
        series: getSeries(dataset, mode, year),
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

import type { ReportStateType, modeType } from "../features/report/reportTypes";
import type { DataRow } from "../data";
import type { Options as ChartOptionsType, SeriesOptionsType } from "highcharts";

export const getLastYear = (dataset: ReportStateType["dataset"]) => {
  if (dataset)
    return dataset.reduce((acc, curr) => (acc.year > curr.year ? acc : curr))
      .year;
};

export const getYearsList = (dataset: ReportStateType["dataset"]) => {
  return [
    ...new Set(
      dataset?.map((el) => {
        return el.year;
      })
    ),
  ];
};

export const getSeries = (dataset: ReportStateType["dataset"], mode: modeType, year: DataRow["year"]): SeriesOptionsType[] => {
    const datasetByYear = dataset?.filter((product)=>{
       return product.year === year;
    })
    if(mode === 'goods'){
        return datasetByYear?.filter((product) => {
          return product.year === year;
        })
        .map((product) => {
          return {
            name: product.name,
            type: 'scatter',
            data: [[product.feature1, product.feature2]],
          };
        }) || [];
    }else{
        return [
            {
                name: 'Feature 1 > 150',
                type: 'scatter',
                data: datasetByYear
                ?.filter((product) => {
                  return product.feature1 > 150;
                }).map((product)=>{ return [product.feature1, product.feature2]})
            },
            {
                name: 'Feature 1 < 100',
                type: 'scatter',
                data: datasetByYear
                ?.filter((product) => {
                  return product.feature1 < 100;
                }).map((product)=>{ return [product.feature1, product.feature2]})
            },
            {
                name: 'other',
                type: 'scatter',
                data: datasetByYear
                ?.filter((product) => {
                  return product.feature1 !< 150 && product.feature1 !> 100;
                }).map((product)=>{ return [product.feature1, product.feature2]})
            }
        ]
    }
    
    
};

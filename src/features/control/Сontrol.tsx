import React, { FC } from "react";
import { Select } from "antd";

import type { modeType } from "../report/reportTypes";
import type { DataRow } from "../../data";

const { Option } = Select;

interface DefaultMenuPropsType {
  yearsList?: DataRow["year"][];
  year?: DataRow["year"];
  setYear: (year: DataRow["year"]) => void;
  setMode: (mode: modeType) => void;
  mode: modeType;
}

const Control: FC<DefaultMenuPropsType> = ({
  yearsList,
  setYear,
  setMode,
  year,
  mode,
}) => {
  const modeList = [
    { name: "categories", description: "Категории товаров" },
    { name: "goods", description: "Товары" },
  ];

  return (
    <div>
      <Select
        showSearch
        value={year}
        style={{ width: 200 }}
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={(selected) => {
          setYear(selected);
        }}
      >
        {yearsList?.map((year, i) => {
          return (
            <Option key={i} value={year}>
              {year}
            </Option>
          );
        })}
      </Select>
      <Select
        showSearch
        value={mode}
        style={{ width: 200 }}
        placeholder="Select a mode"
        optionFilterProp="children"
        onChange={(selected) => {
          setMode(selected);
        }}
      >
        {modeList?.map((mode, i) => {
          return (
            <Option key={i} value={mode.name}>
              {mode.description}
            </Option>
          );
        })}
      </Select>
    </div>
  );
};

export default Control;

import React, { FC } from "react";
import { Menu } from "antd";

import { NavLink } from "react-router-dom";

interface DefaultMenuPropsType {
  selectred: string | null;
  setSelected: (key: string) => void;
}

const DefaultMenu: FC<DefaultMenuPropsType> = ({ selectred, setSelected }) => {
  return (
    <div>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[selectred || ""]}
        onClick={(e) => {
          setSelected(e.key);
        }}
      >
        <Menu.Item key={"home"}>
          <NavLink to="/home">Home</NavLink>
        </Menu.Item>
        <Menu.Item key={"report"}>
          <NavLink to="/report">Report</NavLink>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default DefaultMenu;

import React, { FC } from "react";
import { Menu } from "antd";

import { Link } from "react-router-dom";

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
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item key={"report"}>
          <Link to="/report">Report</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default DefaultMenu;

import React, { FC, useState } from "react";
import { Layout } from "antd";

import DefaultMenu from "../customMenu/customMenu";

const { Header, Content, Footer } = Layout;

const DefaultLayout: FC = ({ children }) => {
  const [selectred, setSelected] = useState<string | null>("home");

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout>
        <Header>
          <DefaultMenu selectred={selectred} setSelected={setSelected} />
        </Header>
        <Content>
          <div style={{ padding: 24, minHeight: 360 }}>{children}</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>it is footer</Footer>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;

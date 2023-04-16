import { Breadcrumb, Button, Layout, Menu, theme, Typography } from "antd";
import MenuItem from "antd/es/menu/MenuItem";

import React from "react";
import { items1, items2, menu } from "./MenuHeader";
import NavPage from "./NavPage";
const { Header, Content, Footer, Sider } = Layout;

const Headers = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal">
          {items1.map((item) => (
            <Menu.Item key={item.key}>
              <a href={item.path}>{item.label}</a>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
              }}
              items={items2}
            />
          </Sider>
          <Content
            style={{
              padding: "0 24px",
              minHeight: "100%",
            }}
          >
            <NavPage />
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default Headers;

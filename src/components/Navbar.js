import React from "react";
import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";

const Navbar = () => {
  return (
    <Header className="header">
      <div className="headerGroup">
        <div className="logo"></div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">뮤지컬</Menu.Item>
          <Menu.Item key="2">콘서트</Menu.Item>
          <Menu.Item key="3">연극</Menu.Item>
        </Menu>
      </div>
    </Header>
  );
};

export default Navbar;

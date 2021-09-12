import React from "react";
import "./MainHeader.scss";
import "antd/dist/antd.css";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <div className="main_head_wrap">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item className="hidden1"></Menu.Item>
        <Menu.Item key="1">
          <Link to="/">뮤지컬</Link>
        </Menu.Item>
        <Menu.Item key="2">콘서트</Menu.Item>
        <Menu.Item key="3">연극</Menu.Item>
        <Menu.Item className="hidden2"></Menu.Item>
        <Menu.Item className="search ">
          <div className="display">
            <input className="display" type="text"></input>
            <img
              className="display"
              src="http://tkfile.yes24.com/imgNew/common/pf-srch.png"
            />
          </div>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default MainHeader;

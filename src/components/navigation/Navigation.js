import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";

import { Avatar, Button } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";
import "./style.scss";

const IconFont = createFromIconfontCN({
  scriptUrl: ["//at.alicdn.com/t/font_2655175_u2mjedw40si.js"],
});

const navLinks = [
  {
    title: "家",
    icon: "icon-home",
    path: "/home",
  },
  {
    title: "通知",
    icon: "icon-tongzhi",
    path: "/notice",
  },
  {
    title: "留言",
    icon: "icon-xinfeng",
    path: "/chat",
  },
  {
    title: "书签",
    icon: "icon-bookmark",
    path: "/bookmark",
  },
  {
    title: "列表",
    icon: "icon-liebiao",
    path: "/blog",
  },
  {
    title: "用户",
    icon: "icon-yonghu1",
    path: "/user",
  },
  {
    title: "更多",
    icon: "icon-gengduo",
    path: "/more",
  },
  {
    title: "关于我们",
    icon: "icon-guanyuwomen",
    path: "/contactUs",
  },
];

const Navigation = ({ user }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const history = useHistory();
  const { pathname } = useLocation();

  const addResizeEvent = () => {
    window.addEventListener("resize", handleResize);
  };

  const removeResizeEvent = () => {
    window.removeEventListener("resize", handleResize);
  };

  const handleResize = ({ target: { innerWidth } }) =>
    setWindowWidth(innerWidth);

  const linkTo = (path) => {
    removeResizeEvent();
    history.push(path);
  };

  useEffect(() => {
    addResizeEvent(handleResize);
  });

  return (
    <div className="nav-container">
      <div className="logo">
        <img alt="" />
      </div>

      <div className={`menu-container`}>
        <div className="menu-list">
          <ul>
            {navLinks.map(({ path, title, icon }, index) => (
              <li key={index}>
                <div
                  className={`menu-item ${pathname === path && "active"}`}
                  onClick={() => linkTo(path)}
                >
                  <IconFont className="icon" type={icon} />
                  <span className="text">{title}</span>
                </div>
              </li>
            ))}
          </ul>
          <Button type="primary" shape="round" className="btn">
            {windowWidth > 800 ? (
              <span>记录</span>
            ) : (
              <IconFont className="icon" type="icon-xiezi" />
            )}
          </Button>
        </div>
        <span className="avatar">
          <Avatar icon={<IconFont type="icon-javascript" />} />
          <span className="user-name">{user.name}</span>
        </span>
      </div>
    </div>
  );
};

export default Navigation;

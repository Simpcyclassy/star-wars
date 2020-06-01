import { Button, Layout, Menu } from "antd";
import React from "react";
import { useLocation } from 'react-router-dom';
import Logo from "../../../assets/logo.png";
import { AppLink } from "../../app/components";
import { PEOPLE, PLANETS, STARSHIPS } from "../constants";

const { Header } = Layout;
const { Item } = Menu;

const Navbar = () => {
  let location = useLocation();
  const menuItem = (linkPath, text, type) => (
    <Item className="header-item" key={text}>
      <Button type="primary" ghost={type} className="header-button">
        <AppLink to={linkPath}>{text}</AppLink>
      </Button>
    </Item>
  );

  const renderMenuItem = ({pathname}) => {
    if (pathname === "/planets") {
      return [
        menuItem("/planets", PLANETS, false),
        menuItem("/people", PEOPLE, true),
        menuItem("/starships", STARSHIPS, true),
      ];
    }
    if (pathname === "/people") {
      return [
        menuItem("/planets", PLANETS, true),
        menuItem("/people", PEOPLE, false),
        menuItem("/starships", STARSHIPS, true),
      ];
    }

    if (pathname === "/starships") {
      return [
        menuItem("/planets", PLANETS, true),
        menuItem("/people", PEOPLE, true),
        menuItem("/starships", STARSHIPS, false),
      ];
    }

    return [
      menuItem("/planets", PLANETS, true),
      menuItem("/people", PEOPLE, true),
      menuItem("/starships", STARSHIPS, true),
    ];

  };

  return (
    <Header className="main-nav">
      <div className="left-menu">
        <AppLink to={'/'}>
          <img src={Logo} width="25%" height="25%" alt="NeoNatar Logo" />
        </AppLink>
      </div>
      <Menu className="right-nav" mode="horizontal">
        {renderMenuItem(location)}
      </Menu>
    </Header>
  );
};

export default Navbar;

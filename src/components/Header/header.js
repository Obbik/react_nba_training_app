import React from "react";
import style from "./header.css";
import { Link } from "react-router-dom";

import FontAwesome from "react-fontawesome";

import SideNav from "./sidenav/sidenav";

const Header = (props) => {
  const navbars = () => {
    return (
      <div className={style.bars}>
        <FontAwesome
          onClick={props.onOpenNav}
          name="bars"
          style={{
            color: "#dfdfdf",
            padding: "10px",
            cursor: "pointer",
          }}
        />
      </div>
    );
  };

  const logo = () => {
    return (
      <Link to="/" className={style.logo}>
        <img alt="nba logo" src="/images/nba_logo.png" />
      </Link>
    );
  };

  return (
    <header className={style.header}>
      <SideNav {...props} />

      <div className={style.headerOpt}>
        {navbars()}
        {logo()}
      </div>
    </header>
  );
};

export default Header;

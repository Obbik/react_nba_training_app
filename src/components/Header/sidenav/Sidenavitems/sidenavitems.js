import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import style from "./sidenav.css";

const SideNavItems = () => {
  return (
    <div>
      <div className={style.option}>
        <Link to="/">
          <FontAwesome name="home" />
          Home
        </Link>
      </div>
      <div className={style.option}>
        <Link to="/news">
          <FontAwesome name="newspaper " />
          news
        </Link>
      </div>
      <div className={style.option}>
        <Link to="/videos">
          <FontAwesome name="video " />
          videos
        </Link>
      </div>
      <div className={style.option}>
        <Link to="/sign-in">
          <FontAwesome name="sign-in-alt " />
          sign-in
        </Link>
      </div>
      <div className={style.option}>
        <Link to="/sign-out">
          <FontAwesome name="sign-out-alt " />
          sign-out
        </Link>
      </div>
    </div>
  );
};

export default SideNavItems;

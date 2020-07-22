import React from "react";
import styles from "./footer.css";
import { Link } from "react-router-dom";

import { CURRENT_Year } from "../../config";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link to="/" className={styles.logo}>
        <img alt="nba logo" src="/images/nba_logo.png" />
      </Link>
      <div className={styles.right}>@NBA {CURRENT_Year} al Rights reserved</div>
    </div>
  );
};

export default Footer;

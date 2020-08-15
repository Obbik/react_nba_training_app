import React from "react";
import styles from "../articles.css";
const UnderHeader = (props) => {
  console.log(props.data);
  return (
    <div className={styles.articleUnderHeader}>
      <div>
        Date:
        <span>{props.data.data}</span>
      </div>
      <div>
        Author:
        <span>{props.data.author}</span>
      </div>
    </div>
  );
};

export default UnderHeader;

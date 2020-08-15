import React from "react";
import FontAwesome from "react-fontawesome";
import styles from "./teaminfo.css";

import moment from "moment";

const TeamInfo = (props) => {
  const teamname = (teams, team) => {
    let data = teams.find((item) => {
      return item.teamId === team;
    });
    if (data) {
      return data.name;
    }
  };

  const formatDate = (date) => {
    return moment(date).format("DD-MM-YYYY");
  };

  return (
    <div className={styles.teaminfo}>
      <span className={styles.teamname}>
        {" "}
        {teamname(props.teams, props.team_id)}{" "}
      </span>
      <span className={styles.date}>
        <FontAwesome name="clock" />
        {formatDate(props.date)}
      </span>
    </div>
  );
};

export default TeamInfo;

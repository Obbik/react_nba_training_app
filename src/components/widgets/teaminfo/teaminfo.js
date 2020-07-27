import React from "react";
import FontAwesome from "react-fontawesome";
import styles from "./teaminfo.css";

const TeamInfo = (props) => {
  const teamname = (teams, team) => {
    let data = teams.find((item) => {
      return item.id === team;
    });
    if (data) {
      return data.name;
    }
  };

  return (
    <div className={styles.teaminfo}>
      <span className={styles.teamname}>
        {" "}
        {teamname(props.teams, props.team_id)}{" "}
      </span>
      <span className={styles.date}>
        <FontAwesome name="clock" /> {props.date}
      </span>
    </div>
  );
};

export default TeamInfo;

import React from "react";
import { Link } from "react-router-dom";

import styles from "./videolist.css";

import TeamInfo from "../teaminfo/teaminfo";

const VideoTemplate = (props) => {
  console.log(props);
  let video = props.data.map((item, i) => (
    <Link to={`video/${item.id}`} key={i}>
      <div className={styles.videolistitem_wrapper}>
        <div
          className={styles.left}
          style={{
            background: `url(/images/videos/${item.image})`,
          }}
        >
          <div></div>
        </div>

        <div className={styles.right}>
          <TeamInfo teams={props.teams} team_id={item.team} date={item.date} />
          <h2>{item.title}</h2>
        </div>
      </div>
    </Link>
  ));
  return video;
};

export default VideoTemplate;

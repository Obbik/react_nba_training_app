import React from "react";

import TeamInfo from "../../Elements/TeamInfo";

import UnderHeader from "../../Elements/UnderHeader";

const header = (props) => {
  const teamInfo = (team) => {
    return team ? <TeamInfo team={team} /> : null;
  };
  const underHeader = (data, author) => <UnderHeader data={{ data, author }} />;

  return (
    <div>
      {" "}
      {teamInfo(props.Team)}
      {underHeader(props.date, props.author)}
    </div>
  );
};

export default header;

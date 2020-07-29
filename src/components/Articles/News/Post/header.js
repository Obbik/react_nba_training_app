import React from "react";

import TeamInfo from "../../Elements/TeamInfo";

import UnderHeader from "../../Elements/UnderHeader";

const header = (props) => {
  const teamInfo = (team) => {
    return team ? <TeamInfo team={team} /> : null;
  };
  const underHeader = () => <UnderHeader />;

  return (
    <div>
      {" "}
      {teamInfo(props.Team)}
      {underHeader()}
    </div>
  );
};

export default header;

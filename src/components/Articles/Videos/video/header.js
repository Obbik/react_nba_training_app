import React from "react";

import TeamNfo from "../../Elements/TeamInfo";

const Header = (props) => {
  const teamNfo = (team) => {
    return team ? <TeamNfo team={team} /> : null;
  };

  console.log(props);
  return <div> {teamNfo(props.TeamData)}</div>;
};

export default Header;

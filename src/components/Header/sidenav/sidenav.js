import React from "react";
import SideNav from "react-simple-sidenav";

import SideNavItems from "./Sidenavitems/sidenavitems";

const Sidenavigation = (props) => {
  return (
    <div>
      <SideNav
        navStyle={{
          maxWidth: "220px",
          background: "black",
        }}
        showNav={props.ShowNav}
        onHideNav={props.onHideNav}
      >
        <SideNavItems />
      </SideNav>
    </div>
  );
};

export default Sidenavigation;

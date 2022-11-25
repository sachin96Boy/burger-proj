import React from "react";
import Auxilary from "../../hoc/Auxilary";
import TopBar from "../Navigation/Toolbar/TopBar";

function Layout(props) {
  return (
    <Auxilary>
      <TopBar />
      <main className="mt-20">{props.children}</main>
    </Auxilary>
  );
}

export default Layout;

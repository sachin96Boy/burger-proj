import React from "react";
import Auxilary from "../../hoc/Auxilary";

function Layout(props) {
  return (
    <Auxilary>
      <div>Layout</div>
      <main>{props.children}</main>
    </Auxilary>
  );
}

export default Layout;

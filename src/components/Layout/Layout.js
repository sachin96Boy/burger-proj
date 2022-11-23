import React from "react";
import Auxilary from "../../hoc/Auxilary";

function Layout(props) {
  return (
    <Auxilary>
      <div>Layout</div>
      <main className="mt-4">{props.children}</main>
    </Auxilary>
  );
}

export default Layout;

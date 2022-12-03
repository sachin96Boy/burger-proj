import React from "react";

function Bakdrop(props) {
  return props.show ? (
    <div onClick={props.clicked} className="fixed z-40 bg-black opacity-50 w-full h-full top-0 left-0"></div>
  ) : null;
}

export default Bakdrop;

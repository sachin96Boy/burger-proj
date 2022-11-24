import React from "react";

function Modal(props) {
  return (
    <div className="fixed z-50 bg-white w-2/3 border border-white shadow-black p-4 left-5 top-1/4 box-border transition-all">
      {props.children}
    </div>
  );
}

export default Modal;

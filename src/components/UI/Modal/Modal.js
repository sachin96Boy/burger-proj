import React from "react";
import Auxilary from "../../../hoc/Auxilary";
import Bakdrop from "../Backdrop/Bakdrop";

function Modal(props) {
  return (
    <Auxilary>
      <Bakdrop show={props.show} clicked={props.modalClosed} />
      <div
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
        className="fixed z-50 bg-white w-2/3 border border-white shadow-black p-4 left-5 top-1/4 box-border transition-all"
      >
        {props.children}
      </div>
    </Auxilary>
  );
}

export default Modal;

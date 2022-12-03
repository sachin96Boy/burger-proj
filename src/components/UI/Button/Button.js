import React from "react";

function Button(props) {
  let buttonVarient = "success" | "warning";
  if (props.buttonVarient === "success") {
    buttonVarient =
      "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded";
  } else if (props.buttonVarient === "warning") {
    buttonVarient =
      "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded";
  }

  return <button onClick={props.clicked} className={buttonVarient}>{props.children}</button>;
}

export default Button;

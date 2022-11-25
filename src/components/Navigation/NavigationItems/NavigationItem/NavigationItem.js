import React from "react";

function NavigationItem(props) {
  return (
    <li className="m-0 box-border flex h-full items-center">
      <a
        className="hover:bg-orange-400 active:bg-orange-400 hover:border-b-blue-300 active:border-b-blue-300 hover:text-white active:text-white text-white h-full px-3 py-4 border-b-4 border-b-transparent box-border block"
        href={props.link}
      >
        {props.children}
      </a>
    </li>
  );
}

export default NavigationItem;

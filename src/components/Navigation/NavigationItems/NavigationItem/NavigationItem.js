import React from "react";

function NavigationItem(props) {
  return (
    <li className="m-0 box-border flex h-full items-center">
      <a
        className="lg:hover:bg-orange-400 lg:active:bg-orange-400 lg:hover:border-b-blue-300 lg:active:border-b-blue-300 hover:text-white active:text-white lg:text-white text-blue-600 lg:h-full px-3 lg:py-4 lg:border-b-4 border-b-transparent box-border block"
        href={props.link}
      >
        {props.children}
      </a>
    </li>
  );
}

export default NavigationItem;

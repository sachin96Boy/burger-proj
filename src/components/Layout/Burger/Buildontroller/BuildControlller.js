import React from "react";

function BuildControlller(props) {
  return (
    <div className="flex justify-between items-center mt-1">
      <div className="p-3 font-bold w-20">{props.label}</div>
      <button
        onClick={props.removed}
        className="disabled:bg-orange-300 disabled:text-white disabled:cursor-not-allowed block p-1 mx-1 w-20 border outline-none cursor-pointer border-orange-500"
      >
        Less
      </button>
      <button
        onClick={props.added}
        className="disabled:bg-orange-300 disabled:text-white disabled:cursor-not-allowed block p-1 mx-1 w-20 border outline-none cursor-pointer border-orange-500"
      >
        More
      </button>
    </div>
  );
}

export default BuildControlller;

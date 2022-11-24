import React from "react";
import BuildControlller from "../Buildontroller/BuildControlller";

function BuildControls(props) {
  const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
  ];
  return (
    <div className="w-full bg-orange-600 flex flex-grow flex-col items-center shadow-md m-auto px-3">
      {controls.map((ctrl) => (
        <BuildControlller key={ctrl.label} label={ctrl.label} added={()=>props.ingredientAdded(ctrl.type)} />
      ))}
    </div>
  );
}

export default BuildControls;

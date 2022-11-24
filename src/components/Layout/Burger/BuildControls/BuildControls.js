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
    <div className="w-full bg-orange-600 py-10 flex flex-grow flex-col items-center shadow-md m-auto px-3">
      <p>
        current prics : Rs. <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => (
        <BuildControlller
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <button onClick={props.ordered} disabled={!props.purchasable} className="bg-gray-700 text-white disabled:bg-red-900">
        Order your burger now
      </button>
    </div>
  );
}

export default BuildControls;

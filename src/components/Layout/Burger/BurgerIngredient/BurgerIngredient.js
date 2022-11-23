import React from "react";

function BurgerIngredient(props) {
  let ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = (
        <div className="w-4/5 h-1/4 bg-gradient-to-r from-orange-400 to-orange-700 rounded-t-md shadow-inner mx-2 my-auto"></div>
      );
      break;
    case "bread-top":
      ingredient = (
        <div className="w-4/5 h-1/5 bg-gradient-to-r from-orange-900 to-orange-700 rounded-t-md shadow-inner mx-2 my-auto flex flex-row justify-between">
          <div className="w-1/12 h-1/6 bg-gradient-to-r from-orange-400 to-orange-700 shadow-inner bg-white  rounded-lg"></div>
          <div className="w-1/12 h-1/6 bg-gradient-to-r from-orange-400 to-orange-700 shadow-inner bg-white  rounded-lg"></div>
        </div>
      );
      break;
    case "meat":
        ingredient = (
            <div className="w-4/5 h-1/6 bg-gradient-to-r from-orange-400 to-orange-700 rounded-t-md shadow-inner mx-2 my-auto"></div>
        )
        break;
    default:
        ingredient = null;
        
  }
  return <div>BurgerIngredient</div>;
}

export default BurgerIngredient;

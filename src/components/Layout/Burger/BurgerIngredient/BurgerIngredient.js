import React from "react";
import PropTypes from "prop-types";

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
      );
      break;
    case "cheese":
      ingredient = (
        <div className="w-4/5 h-1/6 bg-gradient-to-r from-yellow-400 to-yellow-700 rounded-t-md shadow-inner mx-2 my-auto"></div>
      );
      break;
    case "salad":
      ingredient = (
        <div className="w-4/5 h-1/6 bg-gradient-to-r from-green-800 to-green-300 rounded-t-md shadow-inner mx-2 my-auto"></div>
      );
      break;
    case "bacon":
      ingredient = (
        <div className="w-4/5 h-1/6 bg-gradient-to-r from-yellow-800 to-yellow-300 rounded-t-md shadow-inner mx-2 my-auto"></div>
      );
      break;
    default:
      ingredient = null;
  }
  return ingredient;
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
}

export default BurgerIngredient;

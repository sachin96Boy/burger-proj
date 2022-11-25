import React from "react";
import PropTypes from "prop-types";

function BurgerIngredient(props) {
  let ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = (
        <div className="w-4/5 h-1/4 bg-gradient-to-r from-orange-400 to-orange-700 rounded-b-3xl shadow-inner my-2 mx-auto"></div>
      );
      break;
    case "bread-top":
      ingredient = (
        <div className="w-4/5 h-1/5 bg-gradient-to-r from-orange-900 to-orange-700 rounded-t-full shadow-inner shadow-orange-800 my-2 mx-auto flex justify-between items-center px-5">
          <div className="w-20 h-3 shadow-inner left-1/3 right-2/3 top-16 skew-y-12 shadow-slate-400 bg-white  rounded-lg"></div>
          <div className="w-20 h-3 shadow-inner  top-16 left-72  -skew-y-6 shadow-slate-400 bg-white  rounded-lg"></div>
          <div className="w-20 h-3 shadow-inner  right-1/3 left-2/3 top-16 skew-y-12 shadow-slate-400 bg-white  rounded-lg"></div>
          <div className="w-20 h-3 shadow-inner  top-16 right-72  -skew-y-6 shadow-slate-400 bg-white  rounded-lg"></div>
        </div>
      );
      break;
    case "meat":
      ingredient = (
        <div className="w-4/5 h-7 bg-gradient-to-r from-orange-400 to-orange-700 rounded-t-md shadow-inner my-2 mx-auto"></div>
      );
      break;
    case "cheese":
      ingredient = (
        <div className="w-11/12 h-3 bg-gradient-to-r from-yellow-400 to-yellow-700 rounded-t-md shadow-inner my-2 mx-auto"></div>
      );
      break;
    case "salad":
      ingredient = (
        <div className="w-4/5 h-1/6 bg-gradient-to-r from-green-800 to-green-300 rounded-t-md shadow-inner my-2 mx-auto"></div>
      );
      break;
    case "bacon":
      ingredient = (
        <div className="w-4/5 h-1 bg-gradient-to-r from-yellow-800 to-yellow-300 rounded-t-md shadow-inner my-2 mx-auto"></div>
      );
      break;
    default:
      ingredient = null;
  }
  return ingredient;
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;

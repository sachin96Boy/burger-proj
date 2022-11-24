import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

function Burger(props) {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [
        ...Array(
          props.ingredients[igKey]
        ) /* This will generate an array of empty values ex=> for 3 elems ["","",""] likewise*/,
      ].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className="w-full m-auto h-64 overflow-auto text-center font-bold text-lg">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default Burger;

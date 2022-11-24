import React from "react";
import BuildControls from "../../components/Layout/Burger/BuildControls/BuildControls";
import Burger from "../../components/Layout/Burger/Burger";

import Auxilary from "../../hoc/Auxilary";

function BurgerBuilder() {
  const [ingredients, setIngredients] = React.useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });
  return (
    <Auxilary>
      <Burger ingredients={ingredients}/>
      <BuildControls />
    </Auxilary>
  );
}

export default BurgerBuilder;

import React from "react";
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
      <div>build control</div>
    </Auxilary>
  );
}

export default BurgerBuilder;

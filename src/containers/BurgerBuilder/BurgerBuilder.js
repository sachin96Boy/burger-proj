import React from "react";
import BuildControls from "../../components/Layout/Burger/BuildControls/BuildControls";
import Burger from "../../components/Layout/Burger/Burger";

import Auxilary from "../../hoc/Auxilary";

// global variables
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

function BurgerBuilder() {
  const [ingredients, setIngredients] = React.useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });
  const [totalPrice, setTotalPrice] = React.useState(4);
  // console for now to see if it works
  // console.log(setIngredients);

  const addIngredientHandler = (type) => {
    const oldCount = ingredients[type];
    const updatedCount = oldCount + 1;
    // update in an imutable way
    // first create an copy
    // the update it
    // them set it
    const updatedIngredients = {
      ...ingredients,
    };
    updatedIngredients[type] = updatedCount;
    setIngredients(updatedIngredients);
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice + priceAddition;
    setTotalPrice(newPrice);
  };

  const removeIngredientHandler = (type) => {
    const oldCount = ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...ingredients,
    };
    updatedIngredients[type] = updatedCount;
    setIngredients(updatedIngredients);
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice - priceDeduction;
    setTotalPrice(newPrice);
  };

  const disabledInfo = {
    ...ingredients,
  };
  for (let key in disabledInfo) {
    disabledInfo[key] =
      disabledInfo[key] <=
      0; /* This gives an boolean condition either true or false */
  }

  return (
    <Auxilary>
      <Burger ingredients={ingredients} />
      <BuildControls
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
        disabled={disabledInfo}
      />
    </Auxilary>
  );
}

export default BurgerBuilder;

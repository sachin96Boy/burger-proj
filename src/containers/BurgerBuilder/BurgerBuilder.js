import React from "react";
import instance from "../../axios-orders";
import BuildControls from "../../components/Layout/Burger/BuildControls/BuildControls";
import Burger from "../../components/Layout/Burger/Burger";
import OrderSummery from "../../components/Layout/Burger/orderSumery/OrderSummery";
import Modal from "../../components/UI/Modal/Modal";
import Spinner from "../../components/UI/spinner/Spinner";

import Auxilary from "../../hoc/Auxilary";
import WithErrorHandler from "../../hoc/withErrorHandler/WithErrorHandler";

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
  const [purchasable, setPurchasable] = React.useState(false);
  const [purchaseMode, setPurchaseMode] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

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
    updatePurchaseState(updatedIngredients);
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
    updatePurchaseState(updatedIngredients);
  };

  const updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    setPurchasable(sum > 0);
  };

  const purchaseHandler = () => {
    setPurchaseMode(true);
  };

  const purchasedCancelHandler = () => {
    setPurchaseMode(false);
  };

  const purchaseContinueHandler = () => {
    // alert("You continue!");
    setLoading(true);
    instance
      .post(
        "/orders",
        {
          ingredients: ingredients,
          price: totalPrice,
          customer: {
            name: "Max Schwarzmuller",
            address: {
              street: "Teststreet 1",
              zipCode: "41351",
              country: "Germany",
            },
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setLoading(false);
        setPurchaseMode(false);
        console.log(response);
      })
      .catch((error) => {
        setLoading(false);
        setPurchaseMode(false);
        console.log(error);
      });
  };

  const disabledInfo = {
    ...ingredients,
  };
  for (let key in disabledInfo) {
    disabledInfo[key] =
      disabledInfo[key] <=
      0; /* This gives an boolean condition either true or false */
  }

  let orderSummery = (
    <OrderSummery
      ingredients={ingredients}
      purchaseContinued={purchaseContinueHandler}
      purchaseCanceled={purchasedCancelHandler}
      price={totalPrice}
    />
  );
  if (loading) {
    orderSummery = <Spinner />;
  }

  return (
    <Auxilary>
      <Modal show={purchaseMode} modalClosed={purchasedCancelHandler}>
        {orderSummery}
      </Modal>
      <Burger ingredients={ingredients} />
      <BuildControls
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
        disabled={disabledInfo}
        purchasable={purchasable}
        price={totalPrice}
        ordered={purchaseHandler}
      />
    </Auxilary>
  );
}

export default WithErrorHandler(BurgerBuilder, instance);

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import instance from "../../axios-orders";
import BuildControls from "../../components/Layout/Burger/BuildControls/BuildControls";
import Burger from "../../components/Layout/Burger/Burger";
import OrderSummery from "../../components/Layout/Burger/orderSumery/OrderSummery";
import Modal from "../../components/UI/Modal/Modal";
import Spinner from "../../components/UI/spinner/Spinner";

import Auxilary from "../../hoc/Auxilary";
import WithErrorHandler from "../../hoc/withErrorHandler/WithErrorHandler";

import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_INGREDIENTS,
  FETCH_INGREDIENTS_FAILED,
} from "../../store/constants/BurgerConstants";

// global variables
// const INGREDIENT_PRICES = {
//   salad: 0.5,
//   cheese: 0.4,
//   meat: 1.3,
//   bacon: 0.7,
// };

function BurgerBuilder() {
  // const [ingredients, setIngredients] = React.useState({
  //   salad: 0,
  //   bacon: 0,
  //   cheese: 0,
  //   meat: 0,
  // });
  // const [totalPrice, setTotalPrice] = React.useState(4);
  // const [purchasable, setPurchasable] = React.useState(false);
  const [purchaseMode, setPurchaseMode] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();


  const selector = useSelector(
    (state) => {
      return {
        ingredients: state.burger.ingredients,
        totalPrice: state.burger.totalPrice,
        error: state.burger.error,
      };
    }
  );
  console.log(selector);

  const dispatch = useDispatch();



  const addIngredientHandler = (type) => {
    // const oldCount = ingredients[type];
    // const updatedCount = oldCount + 1;
    // update in an imutable way
    // first create an copy
    // the update it
    // them set it
    // const updatedIngredients = {
    //   ...ingredients,
    // };
    // updatedIngredients[type] = updatedCount;
    // setIngredients(updatedIngredients);
    // const priceAddition = INGREDIENT_PRICES[type];
    // const oldPrice = totalPrice;
    // const newPrice = oldPrice + priceAddition;
    // setTotalPrice(newPrice);
    // updatePurchaseState(updatedIngredients);

    dispatch({ type: ADD_INGREDIENT, payload: type });
  };

  const removeIngredientHandler = (type) => {
  //   const oldCount = ingredients[type];
  //   if (oldCount <= 0) {
  //     return;
  //   }
  //   const updatedCount = oldCount - 1;
  //   const updatedIngredients = {
  //     ...ingredients,
  //   };
  //   updatedIngredients[type] = updatedCount;
  //   setIngredients(updatedIngredients);
  //   const priceDeduction = INGREDIENT_PRICES[type];
  //   const oldPrice = totalPrice;
  //   const newPrice = oldPrice - priceDeduction;
  //   setTotalPrice(newPrice);
  //   updatePurchaseState(updatedIngredients);

  dispatch({ type: REMOVE_INGREDIENT, payload: type });
  };

  const updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return (sum > 0);
  };

  const purchaseHandler = () => {
    setPurchaseMode(true);
  };

  const purchasedCancelHandler = () => {
    setPurchaseMode(false);
  };

  const purchaseContinueHandler = () => {
    const queryParams = [];
    for (let i in selector.ingredients) {
      queryParams.push(
        encodeURIComponent(i) + "=" + encodeURIComponent(selector.ingredients[i])
      );
    }
    queryParams.push("price=" + selector.totalPrice);
    navigate({
      pathname: "/checkout",
      search: "?" + queryParams.join("&"),
    });
  };

  const disabledInfo = {
    ...selector.ingredients,
  };
  for (let key in disabledInfo) {
    disabledInfo[key] =
      disabledInfo[key] <=
      0; /* This gives an boolean condition either true or false */
  }

  let orderSummery = (
    <OrderSummery
      ingredients={selector.ingredients}
      purchaseContinued={purchaseContinueHandler}
      purchaseCanceled={purchasedCancelHandler}
      price={selector.totalPrice}
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
      <Burger ingredients={selector.ingredients} />
      <BuildControls
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
        disabled={disabledInfo}
        purchasable={()=>updatePurchaseState(selector.ingredients)}
        price={selector.totalPrice}
        ordered={purchaseHandler}
      />
    </Auxilary>
  );
}

export default WithErrorHandler(BurgerBuilder, instance);

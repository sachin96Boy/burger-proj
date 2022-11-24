import React from "react";
import Auxilary from "../../../../hoc/Auxilary";
import Button from "../../../UI/Button/Button";

function OrderSummery(props) {
  const ingredientSummery = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li className="font-bold" key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Auxilary>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummery}</ul>
      <p className="font-black text-gray-700">Price: Rs. {props.price.toFixed(2)}</p>
      <p>Continue to Checkout?</p>
      <div className="flex items-center justify-evenly gap-3">
        <Button buttonVarient="success" clicked={props.purchaseContinued}>
          CONTINUE
        </Button>
        <Button buttonVarient="warning" clicked={props.purchaseCanceled}>
          CANCEL
        </Button>
      </div>
    </Auxilary>
  );
}

export default OrderSummery;

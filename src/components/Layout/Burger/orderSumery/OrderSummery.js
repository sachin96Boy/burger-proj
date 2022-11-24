import React from "react";
import Auxilary from "../../../../hoc/Auxilary";

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
      <p>Continue to Checkout?</p>
    </Auxilary>
  );
}

export default OrderSummery;

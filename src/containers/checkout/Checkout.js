import React from "react";
import { useNavigate } from "react-router-dom";
import CheckoutSummery from "../../components/order/checkoutSummery/CheckoutSummery";

function Checkout() {
  const ingredients = {
    salad: 1,
    meat: 1,
    cheese: 1,
    bacon: 1,
  };
  const navigate = useNavigate();

  const checkoutCancledHandler = () => {
    navigate("/");
  };
  const checkoutContinuedHandler = () => {
    navigate("/checkout/contact-data");
  };

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutSummery
        ingredients={ingredients}
        checkoutCanceled={checkoutCancledHandler}
        checkoutContinued={checkoutContinuedHandler}
      />
    </div>
  );
}

export default Checkout;

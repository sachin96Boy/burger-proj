import React from "react";
import Burger from "../../Layout/Burger/Burger";
import Button from "../../UI/Button/Button";

function CheckoutSummery(props) {
  return (
    <div className="text-center w-3/4 md:w-96 m-auto ">
      <h1>We hope it tastes well!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button buttonVarient={"warning"} clicked={props.checkoutCancelled}>CANCEL</Button>
      <Button buttonVarient={"success"} clicked={props.checkoutContinued}>CONTINUE</Button>
    </div>
  );
}

export default CheckoutSummery;

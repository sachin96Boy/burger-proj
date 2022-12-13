import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import CheckoutSummery from "../../components/order/checkoutSummery/CheckoutSummery";
import ContactData from "./contactdata/ContactData";

function Checkout() {
  // const [ingredients, setIngredients] = React.useState({
  //   salad: 1,
  //   meat: 1,
  //   cheese: 1,
  //   bacon: 1,
  // });
  // const [price, setPrice] = React.useState(0);
  const navigate = useNavigate();

  const selector = useSelector((state) => {
    return {
      ingredients: state.burger.ingredients,
      totalPrice: state.burger.totalPrice,
    };
  });


  // useEffect(() => {
  //   const query = new URLSearchParams(window.location.search);
  //   const ingredients = {};
  //   let price = 0;
  //   for (let param of query.entries()) {
  //     if (param[0] === "price") {
  //       price = param[1];
  //     } else {
  //       ingredients[param[0]] = +param[1];
  //     }
  //   }
  //   setIngredients(ingredients);
  //   setPrice(price);
  // }, []);

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
        ingredients={selector.ingredients}
        checkoutCanceled={checkoutCancledHandler}
        checkoutContinued={checkoutContinuedHandler}
        price={selector.totalPrice}
      />
      <Routes>
        <Route
          path="contact-data"
          element={<ContactData ingredients={selector.ingredients} price={selector.totalPrice} />}
        />
      </Routes>
    </div>
  );
}

export default Checkout;

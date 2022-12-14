import { useSelector } from "react-redux";
import { redirect, Route, Routes, useNavigate } from "react-router-dom";
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
      purchased: state.order.purchased,
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

  let summary = redirect("/");
  if (selector.ingredients) {
    const purchasedRedirect = selector.purchased ? redirect("/") : null;
    summary = (
      <div>
        {purchasedRedirect}
        <CheckoutSummery
          ingredients={selector.ingredients}
          checkoutCanceled={checkoutCancledHandler}
          checkoutContinued={checkoutContinuedHandler}
        />
        <Routes>
          <Route path="contact-data" element={<ContactData />} />
        </Routes>
      </div>
    );
  }

  return (
    <div>
      <h1>Checkout</h1>

      {summary}
    </div>
  );
}

export default Checkout;

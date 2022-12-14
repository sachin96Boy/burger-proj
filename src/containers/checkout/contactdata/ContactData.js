import React from "react";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/spinner/Spinner";
import Input from "../../../components/UI/input/Input";
import { useDispatch, useSelector } from "react-redux";
import { orderPurchaseStart } from "../../../store/actions/OrderActions";

function ContactData() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [postalCode, setPostalCode] = React.useState("");



  const selector = useSelector((state)=> {
    return {
      ingredients: state.burger.ingredients,
      price: state.burger.totalPrice,
      loading: state.order.loading,
    }
  });

  const dispatch = useDispatch();

  const orderHandler = (event) => {
    event.preventDefault();

    const order = {
      ingredients: selector.ingredients,
      price: selector.price,
      customer: {
        name: name,
        address: {
          street: street,
          zipCode: postalCode,
          country: "USA",
        },
        email: email,
      },
      deliveryMethod: "fastest",
    };
    dispatch(orderPurchaseStart(order));
    console.log(selector.loading);
  };

  let form = (
    <form onSubmit={orderHandler}>
      <Input
        elementType="input"
        elementConfig={
          {
            type: "text",
            name: "name",
            placeholder: "Your Name",
          }
        }
        value={name}
        changed={(e) => setName(e.target.value)}
      />
      <Input
        elementType="input"
        elementConfig={
          {
            type: "email",
            name: "email",
            placeholder: "Your Email",
          }
        }
        value={email}
        changed={(e) => setEmail(e.target.value)}
      />
      <Input
        elementType="input"
        elementConfig={
          {
            type: "text",
            name: "street",
            placeholder: "Street",
          }
        }
        value={street}
        changed={(e) => setStreet(e.target.value)}
      />
      <Input
        elementType="input"
        elementConfig={
          {
            type: "text",
            name: "postal",
            placeholder: "Postal Code",
          }
        }
        value={postalCode}
        changed={(e) => setPostalCode(e.target.value)}
      />
      <Button buttonVarient={"success"} clicked={orderHandler}>
        ORDER
      </Button>
    </form>
  );

  if (selector.loading) {
    form = <Spinner />;
  }

  return (
    <div className="my-5 mx-auto w-3/4 text-center md:w-96">
      <h1>Enter your contact data</h1>
      {form}
    </div>
  );
}

export default ContactData;

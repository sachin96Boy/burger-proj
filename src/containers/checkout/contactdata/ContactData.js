import instance from "../../../axios-orders";
import React from "react";
import { Navigate } from "react-router-dom";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/spinner/Spinner";

function ContactData(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [postalCode, setPostalCode] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const orderHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    const order = {
      ingredients: props.ingredients,
      price: props.price,
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
    instance
      .post("/orders.json", order)
      .then((response) => {
        console.log(response);
        setLoading(false);
        Navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  let form = (
    <form>
      <input
        className="border-2 border-gray-300 p-2 my-2 w-full"
        type="text"
        name="name"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border-2 border-gray-300 p-2 my-2 w-full"
        type="email"
        name="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border-2 border-gray-300 p-2 my-2 w-full"
        type="text"
        name="street"
        placeholder="Street"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
      />
      <input
        className="border-2 border-gray-300 p-2 my-2 w-full"
        type="text"
        name="postal"
        placeholder="Postal Code"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
      />
      <Button buttonVarient={"success"} clicked={orderHandler}>
        ORDER
      </Button>
    </form>
  );

  if (loading) {
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

import React from "react";
import Button from "../../../components/UI/Button/Button";

function ContactData() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [postalCode, setPostalCode] = React.useState("");
  return (
    <div className="my-5 mx-auto w-3/4 text-center md:w-96">
      <h1>Enter your contact data</h1>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="street"
          placeholder="Street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <input
          type="text"
          name="postal"
          placeholder="Postal Code"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
        <Button buttonVarient={"success"}>ORDER</Button>
      </form>
    </div>
  );
}

export default ContactData;

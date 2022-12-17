import React from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/input/Input";

function Auth() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isSignup, setIsSignup] = React.useState(true);
  return (
    <div className="w-4/5 mx-5 text-center p-3 box-border border">
      <form>
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
              type: "password",
              name: "password",
              placeholder: "Your Password",
            }
          }
          value={password}
          changed={(e) => setPassword(e.target.value)}
        />
        <Button buttonVarient="success">Submit</Button>
      </form>
    </div>
  );
}

export default Auth;

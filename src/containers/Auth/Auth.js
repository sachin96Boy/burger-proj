import React from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/input/Input";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../store/actions/AuthAction";
import Spinner from "../../components/UI/spinner/Spinner";

function Auth() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isSignup, setIsSignup] = React.useState(true);

  const selector = useSelector((state) => {
    return {
      loading: state.auth.loading,
      error: state.auth.error,
      isAuthenticated: state.auth.token !== null,
      buildingBurger: state.burger.building,
      authRedirectPath: state.auth.authRedirectPath,
    };
  });

  const dispatch = useDispatch();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(auth(email, password, isSignup));
  };

  const switchAuthModeHandler = () => {
    setIsSignup(!isSignup);
  };
  return (
    <div className="w-4/5 mx-5 text-center p-3 box-border border">
      {
        selector.error ? <p>{selector.error.message}</p> : null
      }
      {selector.loading ? (
        <Spinner />
      ) : (
        <form onSubmit={formSubmitHandler}>
          <Input
            elementType="input"
            elementConfig={{
              type: "email",
              name: "email",
              placeholder: "Your Email",
            }}
            value={email}
            changed={(e) => setEmail(e.target.value)}
          />
          <Input
            elementType="input"
            elementConfig={{
              type: "password",
              name: "password",
              placeholder: "Your Password",
            }}
            value={password}
            changed={(e) => setPassword(e.target.value)}
          />
          <Button buttonVarient="success">Submit</Button>
          <Button buttonVarient="danger" clicked={switchAuthModeHandler}>
            Switch to {isSignup ? "SignIn" : "SignUp"}
          </Button>
        </form>
      )}
    </div>
  );
}

export default Auth;

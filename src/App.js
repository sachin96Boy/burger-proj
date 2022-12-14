import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/checkout/Checkout";
import { Route, Routes } from "react-router-dom";
import Orders from "./containers/orders/Orders";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/logout/Logout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authCheckState } from "./store/actions/AuthAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authCheckState());
  }, [dispatch]);
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="checkout/*" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" exact element={<BurgerBuilder />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

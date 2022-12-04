import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/checkout/Checkout";
import { Route, Routes } from "react-router-dom";
import Orders from "./containers/orders/Orders";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/" exact element={<BurgerBuilder />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/checkout/Checkout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" exact element={<BurgerBuilder />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

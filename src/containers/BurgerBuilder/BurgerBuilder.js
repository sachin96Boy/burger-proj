import React from "react";
import Burger from "../../components/Layout/Burger/Burger";

import Auxilary from "../../hoc/Auxilary";

function BurgerBuilder() {
  return (
    <Auxilary>
      <Burger />
      <div>build control</div>
    </Auxilary>
  );
}

export default BurgerBuilder;

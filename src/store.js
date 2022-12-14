import { configureStore } from "@reduxjs/toolkit";
import burgerReducer from "./store/reducers/BurgerReducer";
import orderReducer from "./store/reducers/OrderReducer";

const store = configureStore({
  reducer: {
    burger: burgerReducer,
    order: orderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
});

export default store;

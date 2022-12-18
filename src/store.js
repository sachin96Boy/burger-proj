import { configureStore } from "@reduxjs/toolkit";
import burgerReducer from "./store/reducers/BurgerReducer";
import orderReducer from "./store/reducers/OrderReducer";
import authReducer from "./store/reducers/AuthReducer";

const store = configureStore({
  reducer: {
    burger: burgerReducer,
    order: orderReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import { combinedMiddleware } from "react-redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import burgerReducer from "./store/reducers/BurgerReducer";
import orderReducer from "./store/reducers/OrderReducer";

const store = configureStore({
  reducer: {
    burger: burgerReducer,
    order: orderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(combinedMiddleware(thunk, createLogger())),
});

export default store;

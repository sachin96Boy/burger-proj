import { createReducer } from "@reduxjs/toolkit";
import {
  ORDER_PURCHASE_INIT,
  ORDER_PURCHASE_START,
  ORDER_PURCHASE_SUCCESS,
  ORDER_PURCHASE_FAIL,
  ORDER_FETCH_START,
  ORDER_FETCH_SUCCESS,
  ORDER_FETCH_FAIL,
} from "../constants/OrderConstants";
const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};

const orderReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ORDER_PURCHASE_INIT, (state, action) => {
      return {
        ...state,
        purchased: false,
      };
    })
    .addCase(ORDER_PURCHASE_START, (state, action) => {
      return {
        ...state,
        loading: true,
      };
    })
    .addCase(ORDER_PURCHASE_SUCCESS, (state, action) => {
      const newOrder = {
        ...action.payload.orderData,
        id: action.payload.id,
      };

      return {
        ...state,
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder),
      };
    })
    .addCase(ORDER_PURCHASE_FAIL, (state, _) => {
      return {
        ...state,
        loading: false,
      };
    })
    .addCase(ORDER_FETCH_START, (state, _) => {
      return {
        ...state,
        loading: true,
      };
    })
    .addCase(ORDER_FETCH_SUCCESS, (state, action) => {
      return {
        ...state,
        orders: action.payload.orders,
        loading: false,
      };
    })
    .addCase(ORDER_FETCH_FAIL, (state, _) => {
      return {
        ...state,
        loading: false,
      };
    })
    .addDefaultCase((state, _) => {
      return state;
    });
});

export default orderReducer;

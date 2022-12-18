import instance from "../../axios-orders";
import {
  ORDER_PURCHASE_INIT,
  ORDER_PURCHASE_START,
  ORDER_PURCHASE_SUCCESS,
  ORDER_PURCHASE_FAIL,
  ORDER_FETCH_START,
  ORDER_FETCH_SUCCESS,
  ORDER_FETCH_FAIL,
} from "../constants/OrderConstants";

export const orderPurchaseInit = () => (dispatch) => {
  dispatch({ type: ORDER_PURCHASE_INIT });
};

export const orderPurchaseStart = (orderData, authToken) => (dispatch) => {
  dispatch({ type: ORDER_PURCHASE_START });
  instance
    .post(`/orders.json?auth=${authToken}`, orderData)
    .then((response) => {
      dispatch({
        type: ORDER_PURCHASE_SUCCESS,
        payload: { orderData, id: response.data.name },
      });
    })
    .catch((error) => {
      dispatch({ type: ORDER_PURCHASE_FAIL, payload: error });
    });
};

export const orderFetchStart = (authToken) => (dispatch) => {
  dispatch({ type: ORDER_FETCH_START });
  instance
    .get(`/orders.json?auth=${authToken}`)
    .then((response) => {
      const orders = [];
      for (let key in response.data) {
        orders.push({
          ...response.data[key],
          id: key,
        });
      }
      dispatch(orderFetchSuccess(orders));
    })
    .catch((error) => {
      dispatch({ type: ORDER_FETCH_FAIL, payload: error });
    });
};

export const orderFetchSuccess = (orders) => (dispatch) => {
  dispatch({ type: ORDER_FETCH_SUCCESS, payload: { orders } });
};

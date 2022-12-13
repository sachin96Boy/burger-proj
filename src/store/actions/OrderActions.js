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
}

export const orderPurchaseStart = () => (dispatch) => {
    instance.post("/orders.json").then((response) => {
        dispatch({ type: ORDER_PURCHASE_START, payload: response.data });
    }).catch((error) => {
        dispatch({ type: ORDER_PURCHASE_FAIL, payload: error });
    });
}

export const orderPurchaseSuccess = (orderId, orderData) => (dispatch) => {
    dispatch({ type: ORDER_PURCHASE_SUCCESS, payload: { orderId, orderData } });
}



export const orderFetchStart = () => (dispatch) => {
    instance.get("/orders.json").then((response) => {
        dispatch({ type: ORDER_FETCH_START, payload: response.data });
    }).catch((error) => {
        dispatch({ type: ORDER_FETCH_FAIL, payload: error });
    });
}

export const orderFetchSuccess = (orders) => (dispatch) => {
    dispatch({ type: ORDER_FETCH_SUCCESS, payload: { orders } });
}


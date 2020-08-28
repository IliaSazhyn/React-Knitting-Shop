import axios from "../../axios-orders";
import {
  CREATE_ORDER,
  CLEAR_CART,
  CLEAR_ORDER,
  FETCH_ORDERS,
} from "../actions/actionTypes";

export const createOrder = (order, token) => (dispatch) => {

  axios
    .post("/orders.json?auth=" + token, order)
    .then((data) => {
      dispatch({ type: CREATE_ORDER, payload: data });
      localStorage.clear("cartItems");
      dispatch({ type: CLEAR_ORDER });
      dispatch({ type: CLEAR_CART });
    });
};
export const clearOrder = () => (dispatch) => {
  dispatch({ type: CLEAR_ORDER });
};
export const clearCart = () => (dispatch) => {
  dispatch({ type: CLEAR_CART });
};
export const fetchOrders = () => (dispatch) => {
  fetch("/api/orders")
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: FETCH_ORDERS, payload: data });
    });
};

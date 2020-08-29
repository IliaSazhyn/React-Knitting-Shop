import axios from "../../axios-orders";
import * as emailjs from 'emailjs-com'
import {
  CREATE_ORDER,
  CLEAR_CART,
  CLEAR_ORDER,
  FETCH_ORDERS,
} from "../actions/actionTypes";

export const createOrder = (order, token) => (dispatch) => {
let tmp = order.cartItems;
let products = [];
let count = [];
tmp.forEach((x) => {
  count.push(x.count)
  products.push(x.title) 
})
  let templateParams = {
    from_name: 'Покупатель',
    to_name: 'yamarsana',
    subject: 'Новый заказ',
    name: order.name,
    email: order.email,
    address: order.address,
    warehouse: order.warehouse,
    phone: order.phone,
    payment: order.payment,
    date: order.date,
    comment: order.comment,
    chosenProducts: products,
    count: count,
   }
  emailjs.send(
    'gmail',
    process.env.REACT_APP_TEMPLATE_ID,
     templateParams,
     process.env.REACT_APP_USER_ID
   )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
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



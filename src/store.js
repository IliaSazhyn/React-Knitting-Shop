import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./store/reducers/productsReducers";
import { cartReducer } from "./store/reducers/cartReducers";
import { orderReducer } from "./store/reducers/orderReducers";
import { authReducer } from "./store/reducers/authReducers";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer,
    auth: authReducer,
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;

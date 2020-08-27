import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_CATEGORY,
  SORT_PRODUCTS_BY_PRICE,
} from "../actions/actionTypes";

export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { items: action.payload, filteredItems: action.payload };
    case FILTER_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        category: action.payload.category,
        filteredItems: action.payload.items,
      };
    case SORT_PRODUCTS_BY_PRICE:
      return {
        ...state,
        sort: action.payload.sort,
        filteredItems: action.payload.items,
      };
    default:
      return state;
  }
};

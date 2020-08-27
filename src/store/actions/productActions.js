import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_CATEGORY,
  SORT_PRODUCTS_BY_PRICE,
} from "./actionTypes";
import axios from "../../axios-orders";

export const fetchProducts = () => async (dispatch) => {
  const res = await axios("/items.json");
  dispatch({
    type: FETCH_PRODUCTS,
    payload: res.data,
  });
};

export const filterProducts = (products, cat) => (dispatch) => {
  const filterProducts = products.slice();
  let filteredValues = null;
  if (cat === "all") {
    filteredValues = filterProducts;
  } else {
    filteredValues = filterProducts.filter((product) => {
      return product.category.includes(cat);
    });
  }

  dispatch({
    type: FILTER_PRODUCTS_BY_CATEGORY,
    payload: {
      items: filteredValues,
      cat: cat,
    },
  });
};

export const sortProducts = (filteredProducts, sort) => (dispatch) => {
  const sortedProducts = filteredProducts.slice();
  if (sort === "latest") {
    sortedProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
  } else {
    sortedProducts.sort((a, b) =>
      sort === "lowest"
        ? a.price > b.price
          ? 1
          : -1
        : a.price > b.price
        ? -1
        : 1
    );
  }

  dispatch({
    type: SORT_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: sortedProducts,
    },
  });
};

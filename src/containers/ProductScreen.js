import React from "react";
import Products from "../components/Products/Products";
import Filter from "../components/Filter/Filter";

const ProductScreen = () => {
  return (
    <div>
      <Filter />
      <Products />
    </div>
  );
};

export default ProductScreen;

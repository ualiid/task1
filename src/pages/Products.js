import React from "react";
import ProductList from "../components/Products/ProductList";
import { ProductContext } from "../context/products";
export default function Products() {
  const { products } = React.useContext(ProductContext);

  
  return <ProductList title="our products" products={products} />;
}

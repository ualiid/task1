import React from "react";
import { useHistory } from "react-router-dom";
import { useGlobalContextCart } from "../../context/cart";
import { useGlobalContextProducts } from "../../context/products";
export default function Product({ image, title, id, price }) {
  const {products}=useGlobalContextProducts();

  const product = products.find((item) => item.id === id);

  const {addToCart}=useGlobalContextCart();
  let history = useHistory();
  return (
    <article className="product">
      <div className="img-container">
        <img src={image} alt={title} />
       
      </div>
      <div className="product-footer">
        <p className="product-title">{title}</p>
        <p className="product-price">$ {price}</p>
        <button
          className="btn btn-primary btn-block "
          onClick={() => {
            addToCart(product);
            history.push("/cart");
          }}
        >
          add to cart
        </button>
      </div>
    </article>
  );
}

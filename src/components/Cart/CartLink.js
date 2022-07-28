import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContextCart} from "../../context/cart";
 export default  function CartLink() {
  const { cartItems } = useGlobalContextCart();

  return (
    <div className="cart-link-container">
      <Link to="/cart">cart</Link>
      <span className="cart-link-total">{cartItems}</span>
    </div>
  );
}


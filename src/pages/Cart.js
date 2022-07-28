import React from "react";
import CartItem from "../components/Cart/CartItem";
import EmptyCart from "../components/Cart/EmptyCart";

import { CartContext } from "../context/cart";;
export default function CartList() {
  const { cart, total } = React.useContext(CartContext);
  if (cart.length === 0) {
    return <EmptyCart />;
  }
  return (
    <section className="cart-items section">
      <h2>your cart</h2>
      {cart.map(item => {
        return <CartItem key={item.id} {...item} />;
      })}
      <h2>total : $ {total}</h2>
  
        <button className="btn btn-primary btn-block" onClick={console.log(cart)}>
          checkout
        </button>
      
      
    </section>
  );
}

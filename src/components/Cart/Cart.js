import React from "react";

import classes from "./Cart.module.css";

export default function Cart() {

  const cartItems = <ul>{[{
      id: 'c1',
      name: "Pasta",
      amount: 2,
      price: 11.99
    }].map(cart => <li key={cart.id}>{cart.name}</li>)}
    </ul>   

  return (
    <div>
        {cartItems}
      <div></div>
      <div></div>
    </div>
  );
}

import React from "react";
import Modal from "../UI/Modal/Modal";

import classes from "./Cart.module.css";

export default function Cart() {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: "c1",
          name: "Pasta",
          amount: 2,
          price: 11.99,
        },
      ].map((cart) => (
        <li key={cart.id}>{cart.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
        {cartItems}
        <div>
          <span>Total Amonut: </span>
          <span>35.12$</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]}>Close</button>
          <button className={classes.button}>Order</button>
        </div>
    </Modal>
  );
}

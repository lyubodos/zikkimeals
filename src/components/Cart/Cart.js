import React from "react";
import Modal from "../UI/Modal/Modal";

import classes from "./Cart.module.css";

export default function Cart(props) {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: "c1",
          name: "Pasta",
          description: "A delicious spagetti carbonara from one of the best chefs in Italy",
          amount: 2,
          price: 11.99,
        },
      ].map((cart) => (
        <li key={cart.id}>{cart.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
        {cartItems}
        <div>
          <p>A delicious spagetti carbonara from one of the best chefs in Italy</p>
          <span>Total Amonut: </span>
          <span>35.12$</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onHideCart}>Close</button>
          <button className={classes.button}>Order</button>
        </div>
    </Modal>
  );
}

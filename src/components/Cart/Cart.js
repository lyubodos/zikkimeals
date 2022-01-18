import React from "react";
import { useContext } from "react/cjs/react.development";
import CartContext from "../../store/cart-conext";
import Modal from "../UI/Modal/Modal";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";

export default function Cart(props) {
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}$`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHanlder = (id) => {};

  const cartAddHanlder = (item) => {};

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          onRemove={cartItemRemoveHanlder.bind(null, item.id)}
          onAdd={cartAddHanlder.bind(null, item)}
        >
          {}
        </CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div>
        <p>
          A delicious spagetti carbonara from one of the best chefs in Italy
        </p>
        <span>Total Amonut: </span>
        <span>35.12$</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

import React, { useState } from "react";
import { useContext } from "react/cjs/react.development";
import CartContext from "../../store/cart-conext";
import Modal from "../UI/Modal/Modal";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

export default function Cart(props) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [didSubmit, setIsSubmit] = useState(false);

  const cartCtx = useContext(CartContext);

  // const totalAmount = `${cartCtx.totalAmount.toFixed(2)}$`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHanlder = (id) => {
    cartCtx.removeItem(id);
  };

  const cartAddHanlder = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

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

  const orderHandler = () => {
    setIsCheckingOut(true);
  };

  const submitOrderHanlder = async (userData) => {
    setIsSubmiting(true);

    await fetch(
      "https://zikki-meals-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmiting(false);
    setIsSubmit(true);
    cartCtx.clearCart();
  };

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onHideCart}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModal = (
    <React.Fragment>
      {cartItems}
      <div>
        <span>Total Amonut: </span>
        <span>{cartCtx.totalAmount.toFixed(2)}$</span>
      </div>
      {isCheckingOut && (
        <Checkout onConfirm={submitOrderHanlder} onCancel={props.onHideCart} />
      )}
      {!isCheckingOut && modalActions}
    </React.Fragment>
  );

  const isSubmitingModal = <p>Sending order data...</p>;
  const disSubmitModal = <p>Successfully sent order!</p>

  return <Modal onHideCart={props.onHideCart}>
    {isSubmiting ? isSubmitingModal : cartModal}
    {didSubmit && disSubmitModal}
  </Modal>;
}

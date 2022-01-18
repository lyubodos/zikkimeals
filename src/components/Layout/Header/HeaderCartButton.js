import React, {useContext} from "react";
import CartContext from "../../../store/cart-conext";
import CartIcon from "../../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";

export default function HeaderCartButton(props) {

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0)

  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span >Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

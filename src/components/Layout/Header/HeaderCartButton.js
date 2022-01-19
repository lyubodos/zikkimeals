import React, {useContext, useEffect, useState} from "react";
import CartContext from "../../../store/cart-conext";
import CartIcon from "../../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";

export default function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);
  const [btnHighlight, setBtnHighlight] = useState(false);

  const {items} = cartCtx;

  const numberOfCartItems = items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  const brnClasses = `${classes.button} ${btnHighlight ? classes.bump : ""}`

  useEffect(() => {
    if(items.length === 0){
      return;
    }
    setBtnHighlight(true);
    
    const timer = setTimeout(() => {
      setBtnHighlight(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };

  }, [items])

  return (
    <button className={brnClasses} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span >Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

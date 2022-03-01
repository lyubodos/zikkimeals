import { useContext } from "react";
import CartContext from "../../../store/cart-conext";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

export default function MealItem(props) {
  const cartCtx = useContext(CartContext);

  const price = props.price.toFixed(2) + "$";

  const addCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.desription}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addCartHandler} />
      </div>
    </li>
  );
}

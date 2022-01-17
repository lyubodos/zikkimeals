import React from "react";

import classes from "./MealItem.module.css";

export default function MealItem(props) {
  const price = props.price.toFixed(2) + "$";

  return (
    <li className={classes.meal} key={props.id}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.desription}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
}

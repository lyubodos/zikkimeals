import React from "react";

import classes from "./Header.module.css";
import mealsImage from "../../../assets/meals.jpg";

export default function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Zikki Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="picture of meals" />
      </div>
    </React.Fragment>
  );
}

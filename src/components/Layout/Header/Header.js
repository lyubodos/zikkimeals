import React from "react";

import classes from "./Header.module.css";
import mealsImage from "../../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Zikki Meals</h1>
        <HeaderCartButton onShowCart={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="picture of meals" />
      </div>
    </React.Fragment>
  );
}

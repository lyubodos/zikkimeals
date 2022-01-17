import React, { useState, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsAv, setCartIsAv] = useState(false);

  const showCartHandler = e => {
    setCartIsAv(true);
  };

  const hideCartHandler = e => {
    setCartIsAv(false);
  }

  return (
    <div>
      {cartIsAv && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;

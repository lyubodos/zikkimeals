import React, { useReducer } from "react";
import CartContext from "./cart-conext";


const defaultState = {
    items: [],
    totalAmount: 0
};

const ACTIONS = {
    ADD_ITEM : 'ADD_ITEM',
    RMV_ITEM : 'REMOVE_ITEM'
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD_ITEM'){
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price *action.item.amount;

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    };


    return defaultState;
}

export default function CartProvider(props) {

  const [cartState, dispatchCart] = useReducer(cartReducer, defaultState)

  const addItemToCartHandler = (item) => {
      dispatchCart({type: 'ADD_ITEM', item: item});
  };

  const removeItemFromHandler = (id) => {
    dispatchCart({type: 'REMOVE_ITEM', id: id});
  };


  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromHandler,
  };    

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

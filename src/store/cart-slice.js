import {createSlice} from "@reduxjs/toolkit";


const cartInitialState = {
    items: [],
    changed: false,
    totalQuantiti: 0
}

createSlice({
    name: "cart",
    initialState: cartInitialState,
    reducers: {
        addItemToCart(state, action) {

        },
        removeItemFromCart(state, action){

        }
    }
})
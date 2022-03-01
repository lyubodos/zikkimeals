import {createSlice} from "@reduxjs/toolkit";


const cartInitialState = {
    items: [],
    changed: false,
    totalQuantity: 0
}

createSlice({
    name: "cart",
    initialState: cartInitialState,
    reducers: {
        addItemToCart(state, action) {
            state.totalQuantity++;
            state.changed = true;

            const newItem = action.payload;

            const existingItem = items.find(item => item.id === newItem.id );

            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice += existingItem.price;

            } else {
                state.items.push({
                    id: existingItem.id,
                    name: existingItem.name,
                    description: existingItem.description,
                    price: existingItem.price,
                    quantity: 1,
                    totalPrice: existingItem.price
                })
            }
        },
        removeItemFromCart(state, action){
            state.changed = true;
            state.totalQuantity--;
            
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);

    
            if(existingItem.quantity === 1) {
                state.items.filter(item => item.id !=== id)
            } 

            existingItem.quantity--;
            existingItem.totalPrice -= existingItem.price;
            
        }
    }
})
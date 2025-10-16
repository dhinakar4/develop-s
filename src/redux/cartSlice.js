import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   items: []
};

const cartSlice = createSlice({

    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const product = action.payload;
            const existing = state.items.find(item=> item.id === product.id);
            if(existing) {
                existing.quantity += 1;
            } else {
                state.items.push({...product, quantity: 1});
            }
        },
        removeItem: (state, action) => {
            const id = action.payload;
          
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
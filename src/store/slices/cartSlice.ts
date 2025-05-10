import { createSlice } from "@reduxjs/toolkit";

import type { CartState } from "../../types/types";

const initialState: CartState = {
    cart: []
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find(item => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        }
    }
})

export const { addToCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
import { createSlice } from '@reduxjs/toolkit'

const initialCart = {
    isLoading: false,
    cart: [],
    cart_quantity: 0,
    total: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCart,
    reducers: {
        showCart: (state) => state,
        addCart: (state, action) => {

            state.cart_quantity += 1,
            state.cart.push(action.payload),
            state.total += action.payload.price * action.payload.quantity;

        },

        removeItem: (state, action) => {

            state.cart_quantity -= 1,
            state.cart = state.cart.filter((item) => item._id !== action.payload._id)
            state.total -= action.payload.price * action.payload.quantity;


        },

        removeItems: (state, action) => {
            state.cart_quantity = 0,
            state.cart = [],
            state.total = 0
        }

    }

})

export const { showCart, addCart, removeItem, removeItems } = cartSlice.actions;
export default cartSlice.reducer;


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
            const itemInCart = state.cart.find((item) => item.id == action.payload.id);
            if (itemInCart) {
                state.total += action.payload.price * action.payload.quantity;
                itemInCart.quantity++;
              } else {
                state.cart_quantity += 1;
                state.cart.push(action.payload);
                state.total += action.payload.price * action.payload.quantity;
              }
        },

        removeItem: (state, action) => {
             state.cart_quantity -= 1,
            state.total -= action.payload.price * action.payload.quantity;
            console.log(action.payload.id),
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)
           
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


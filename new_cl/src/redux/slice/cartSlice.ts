import { ProductListType } from '@/app/(home)/_components/HomePageDataType';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  items: ProductListType[];
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [] as ProductListType[],
  } as CartState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductListType>) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item._id === newItem._id);

      if (existingItem) {
        existingItem.count! += 1;
      } else {
        state.items.push({ ...newItem, count: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter((item) => item._id !== itemIdToRemove);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export const selectCartItems = (state: { cart: CartState }) => state.cart.items;

export default cartSlice.reducer;

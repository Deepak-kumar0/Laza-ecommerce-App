import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const exist = state.cart.find(item => item.id === action.payload.id);
      if (exist) {
        exist.quantity += 1;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },

    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.cart.find(item => item.id === action.payload);

      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.cart.find(item => item.id === action.payload);

      if (item) {
        item.quantity -= 1;
      }

      state.cart = state.cart.filter(item => item.quantity > 0);
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;

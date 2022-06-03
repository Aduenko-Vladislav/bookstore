import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart, ICartInfo } from "../types";

const initialState: ICart = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, { payload }: PayloadAction<ICartInfo>) => {
      state.cart = [
        { ...payload },
        ...state.cart.filter((item) => item.isbn13 !== payload.isbn13),
      ];
    },
    removeCart: (state, { payload }: PayloadAction<ICartInfo>) => {
      state.cart = state.cart.filter((item) => item.isbn13 !== payload.isbn13);
    },
  },
});

export default cartSlice.reducer;

export const { addCart, removeCart } = cartSlice.actions;

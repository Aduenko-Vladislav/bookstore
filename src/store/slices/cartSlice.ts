import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart, IDetailsBook } from "../types";

const initialState: ICart = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, actions: PayloadAction<IDetailsBook>) => {
        state.cart.push(actions.payload);
    },
    removeCart: (state, { payload }: PayloadAction<IDetailsBook>) => {
      state.cart = state.cart.filter((item) => item.isbn13 !== payload.isbn13);
    },
  },
});

export default cartSlice.reducer

export const { addCart, removeCart } = cartSlice.actions;

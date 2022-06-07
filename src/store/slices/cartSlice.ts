import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBookCartApi, ICart, } from "../types";

const initialState: ICart = {
  cart: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, { payload }: PayloadAction<IBookCartApi, string>) => {
      state.cart = [
        { ...payload },
        ...state.cart.filter((item) => item.isbn13 !== payload.isbn13),
      ];
    },
    removeCart: (state, { payload }: PayloadAction<any>) => {
      state.cart = state.cart.filter((item) => item.isbn13 !== payload.isbn13);
    },
    increaseAmount: (state, { payload }: PayloadAction<any>) => {
      const cart = state.cart.find((book) => book.isbn13 === payload.isbn13);
      if (cart) {
        cart.amount = cart.amount + 1;
      }
    },
    decreaseAmount: (state, { payload }: PayloadAction<any>) => {
      const cart = state.cart.find((book) => book.isbn13 === payload.isbn13);
      if (cart) {
        cart.amount = cart.amount - 1;
      }
    },
  },
});

export default cartSlice.reducer;

export const { addCart, removeCart, increaseAmount, decreaseAmount } =
  cartSlice.actions;

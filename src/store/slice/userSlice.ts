import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook, IUser } from "../types";

const initialState: IUser = {
  sortMode: "asc",
  favorites: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addFavotites: (state, { payload }: PayloadAction<IBook>) => {
      state.favorites = [
        { ...payload },
        ...state.favorites.filter((item) => item.isbn13 !== payload.isbn13),
      ];
    },
  },
});
export default userSlice.reducer;

export const { addFavotites } = userSlice.actions;

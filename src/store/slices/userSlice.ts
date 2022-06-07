import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook, IUser } from "../types";

const initialState: IUser = {
  sortMode: "asc",
  favorites: [],
  isAuth: false,
  email: undefined,
  name: undefined,
  password: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isAuth = true;
      state.email = action.payload;
    },
    setUserName: (state, action) => {
      state.name = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    unsetUser: (state) => {
      state.isAuth = false;
      state.email = undefined;
    },
    addFavotites: (state, { payload }: PayloadAction<IBook>) => {
      state.favorites = [
        { ...payload },
        ...state.favorites.filter((item) => item.isbn13 !== payload.isbn13),
      ];
    },
    removeFavorite: (state, { payload }: PayloadAction<IBook>) => {
      state.favorites = state.favorites.filter(
        (item) => item.isbn13 !== payload.isbn13
      );
    },
  },
});
export default userSlice.reducer;

export const {
  addFavotites,
  removeFavorite,
  unsetUser,
  setPassword,
  setUserName,
  setUser,
} = userSlice.actions;

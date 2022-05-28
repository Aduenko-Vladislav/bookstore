import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slice/bookSlice";
import userReducer from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    user: userReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

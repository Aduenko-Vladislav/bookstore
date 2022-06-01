import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { bookApi } from "../../services/bookService";
import { INewBooksApi } from "../../services/types";
import { INewBooklopata } from "../types";

const initialState: INewBooklopata = {
  books: [],
  error: null,
  status: "idle",
};

export const fetchNewBook = createAsyncThunk<INewBooksApi>(
  "book/fetchNewBook",
  async () => {
    return bookApi.getNewBooks();
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder.addCase(fetchNewBook.pending, (state) => {
  //     state.status = "loading";
  //     state.error = null;
  //   });
  //   builder.addCase(fetchNewBook.fulfilled, (state, { payload }) => {
  //     state.status = "success";
  //     state.books = payload;
  //   });
  //   builder.addCase(fetchNewBook.rejected, (state, { payload }) => {
  //     state.status = "error";
  //     state.error = payload;
  //   });
  // },
});
export default bookSlice.reducer;

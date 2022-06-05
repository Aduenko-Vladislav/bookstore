import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { bookApi } from "../../services/bookService";
import { INewBooksApi } from "../../services/types";
import { INewBooks } from "../types";

const initialState: INewBooks = {
  books: [],
  error: null,
  status: "idle",
  total: "0",
};

export const fetchBook = createAsyncThunk<INewBooksApi>(
  "book/fetchBook",
  async () => {
    const newBooks = await bookApi.getNewBooks();
    return newBooks;
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBook.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchBook.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.books = payload.books;
      state.error = payload.error;
      state.total = payload.total;
    });
    builder.addCase(fetchBook.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload;
    });
  },
});
export default bookSlice.reducer;

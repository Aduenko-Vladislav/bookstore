import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../types";

const initialState: IBook[] = [
  {
    image: "https://itbook.store/img/books/9781642002133.png",
    isbn13: "9781642002133",
    price: "$0.00",
    subtitle: "",
    title: "Azure Pipelines Succinctly",
    url: "https://itbook.store/books/9781642002133",
  },
];

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
});
export default bookSlice.reducer;

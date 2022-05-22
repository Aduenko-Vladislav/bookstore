import { Route, Routes } from "react-router-dom";
import MainTemplate from "../components/MainTemplate";
import { BookDetails } from "../pages/BookDetails";
import { Home } from "../pages/Home";
import SearchBooks from "../pages/SearchBooks";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="bookstore" element={<MainTemplate />}>
        <Route path="/bookstore/" element={<Home />} />
        <Route path="/bookstore/books/:id" element={<BookDetails />} />
        <Route path="bookstore/search" element={<SearchBooks />} />
      </Route>
    </Routes>
  );
};

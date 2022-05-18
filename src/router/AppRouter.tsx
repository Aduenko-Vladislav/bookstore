import { Route, Routes } from "react-router-dom";
import MainTemplate from "../components/MainTemplate";
import Book from "../pages/Book";
import { Home } from "../pages/Home";
import SearchBooks from "../pages/SearchBooks";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/bookstore" element={<MainTemplate />}>
        <Route index element={<Home />} />
        <Route path="new" element={<Book />} />
        <Route path="search" element={<SearchBooks />} />
      </Route>
    </Routes>
  );
};

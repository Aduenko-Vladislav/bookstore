import { Route, Routes } from "react-router-dom";
import MainTemplate from "../components/MainTemplate";
import Home from "../pages/Home";
import NewBooks from "../pages/NewBooks";
import SearchBooks from "../pages/SearchBooks";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/bookstore" element={<MainTemplate />}>
        <Route index element={<Home />} />
        <Route path="new" element={<NewBooks />} />
        <Route path="search" element={<SearchBooks />} />
      </Route>
    </Routes>
  );
};

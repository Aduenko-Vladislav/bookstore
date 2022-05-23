import { Route, Routes } from "react-router-dom";
import MainTemplate from "../components/MainTemplate";
import { BookDetails } from "../pages/BookDetails";
import { Home } from "../pages/Home";
import { SearchBooks } from "../pages/SearchBooks";
import { routes } from "../routes/routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.Home} element={<MainTemplate />}>
        <Route path={routes.Home} element={<Home />} />
        <Route path={routes.Details} element={<BookDetails />} />
        <Route path="bookstore/search/:title/:page" element={<SearchBooks />} />
      </Route>
    </Routes>
  );
};

import { Route, Routes } from "react-router-dom";
import MainTemplate from "../components/MainTemplate/MainTemplate";
import { Account } from "../pages/Account";
import { BookDetails } from "../pages/BookDetails";
import { CartBooks } from "../pages/CartBooks";
import { FavoritesBooks } from "../pages/FavoritesBooks";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Register } from "../pages/Register";
import { SearchBooks } from "../pages/SearchBooks";
import { SignIn } from "../pages/SignIn";

import { routes } from "../routes/routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<MainTemplate />}>
        <Route index element={<Home />} />
        <Route path={routes.DETAILS} element={<BookDetails />} />
        <Route path={routes.SEARCH} element={<SearchBooks />} />
        <Route path={routes.FAVORITES} element={<FavoritesBooks />} />
        <Route path={routes.CART} element={<CartBooks />} />
        <Route path={routes.ACCOUNT} element={<Account />}/>
        <Route path={routes.SIGN_IN} element={<SignIn />} />
        <Route path={routes.SIGN_UP} element={<Register />} />
        <Route path={routes.NOT_FOUND} element={<NotFound />} />
      </Route>
    </Routes>
  );
};

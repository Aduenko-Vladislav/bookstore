export enum routes {
  HOME = "/bookstore",
  DETAILS = "/bookstore/books/:id",
  SEARCH = "/bookstore/search/:title/:page",
  FAVORITES = "/bookstore/favorites",
  CART = "/bookstore/cart",
  ACCOUNT = "/bookstore/account",
  SIGN_IN = "/bookstore/sign-in",
  SIGN_UP = "/bookstore/sign-up",
  NOT_FOUND = "*",
}
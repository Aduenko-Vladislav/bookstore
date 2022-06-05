import { RequestStatusType } from "../../config/RequestStatusType";

export interface INewBooks {
  error: any;
  books: IBook[];
  total: string;
  status: RequestStatusType;
}

export interface IBook {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
}

export interface IUser {
  sortMode: "asc" | "desc";
  favorites: IBook[];
}

export interface ICartInfo {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
  year: string;
  publisher: string;
  rating: string;
  authors: string;
}

export interface ICart {
  cart: ICartInfo[];
}

export interface IFavoriteBook {
  favorites: IBook[];
}

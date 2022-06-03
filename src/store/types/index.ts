import { RequestStatusType } from "../../config/RequestStatusType";
import { IDetailsBookApi } from "../../services/types";

export interface INewBook {
  results: {
    error: any;
    total: string;
    books: IBook[];
  };
  error: any;
  status: RequestStatusType;
}

export interface INewBooklopata {
  error: any;
  status: RequestStatusType;
  books: IBook[];
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

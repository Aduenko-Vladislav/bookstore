import { RequestStatusType } from "../../config/RequestStatusType";
import { IDetailsBookApi } from "../../services/types";

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
  cart: IBookCartApi[];
  total: number;
}

export interface IBookCartApi extends ICartInfo {
  amount: number;
}

export interface IFavoriteBook {
  favorites: IBook[];
}

export interface IArguments {
  title: string;
  page: string;
}

export interface IresultBooksApi {
  error: any;
  page: string;
  total: string;
  books: IBook[];
}

export interface IBookApi {
  books: IBook[];
  error: any;
  status: RequestStatusType;
  total: string;
  result: IDetailsBookApi;
}

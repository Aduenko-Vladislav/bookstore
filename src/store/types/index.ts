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

export interface IDetailsBook {
  authors: string;
  desc: string;
  error: string;
  image: string;
  isbn10: string;
  isbn13: string;
  language: string;
  pages: string;
  pdf: {
    [key: string]: string;
  };
  price: string;
  publisher: string;
  rating: string;
  subtitle: string;
  title: string;
  url: string;
  year: string;
}

export interface ICart {
  cart: IDetailsBook[];
}

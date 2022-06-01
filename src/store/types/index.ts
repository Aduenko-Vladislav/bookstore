import { RequestStatusType } from "../../config/RequestStatusType";

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
  error: any
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

export interface INewBooksApi {
  books: INewBookApi[];
  error: string;
  total: string;
}

export interface INewBookApi {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
}

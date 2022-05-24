import { INewBookApi } from "../../services/types";
import { BookItem } from "../BookItem/BookItem";
import { StyledBookList } from "./styles";

interface IBookList {
  books: INewBookApi[];
}

export const BookList = ({ books }: IBookList) => {
  return (
    <StyledBookList>
      {books.map((book) => (
        <BookItem key={book.isbn13} book={book} />
      ))}
    </StyledBookList>
  );
};

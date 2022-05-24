import { INewBookApi } from "../../services/types";
import {
  BookPrice,
  BookSubtitle,
  BookTitle,
  StyledImg,
  StyledLink,
  StyledBookItem,
} from "./styles";

interface IBookItem {
  book: INewBookApi;
}

export const BookItem = ({ book }: IBookItem) => {
  return (
    <StyledBookItem>
      <StyledLink to={`/bookstore/books/${book.isbn13}`}>
        <StyledImg src={book.image} alt={book.title} />
        <BookTitle>{book.title}</BookTitle>
        <BookSubtitle>{book.subtitle}</BookSubtitle>
        <BookPrice>
          {book.price === "$0.00" ? "Free for you" : book.price}
        </BookPrice>
      </StyledLink>
    </StyledBookItem>
  );
};

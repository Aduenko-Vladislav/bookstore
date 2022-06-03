import { INewBookApi } from "../../services/types";
import { useAppDispatch } from "../../store/hooks/hooks";
import { addFavotites } from "../../store/slices/userSlice";
import { IBook } from "../../store/types";
import { Heard } from "../Heard/Heard";
import {
  BookPrice,
  BookSubtitle,
  BookTitle,
  StyledImg,
  StyledLink,
  StyledBookItem,
  HeardContainer,
} from "./styles";

interface IBookItem {
  book: INewBookApi;
}

export const BookItem = ({ book }: IBookItem) => {
  const dispatch = useAppDispatch();

  const handleFavorites = (book: IBook) => {
    dispatch(addFavotites(book));
  };
  return (
    <StyledBookItem key={book.isbn13}>
      <HeardContainer type="button" onClick={() => handleFavorites(book)}>
        <Heard />
      </HeardContainer>
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

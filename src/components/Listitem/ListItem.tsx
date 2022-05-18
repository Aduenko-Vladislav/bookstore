import { INewBookApi } from "../../services/types";
import { BookPrice, BookSubtitle, BookTitle, StyledImg, StyledListItem } from "./styles";

interface IListItem {
  book: INewBookApi;
}

const ListItem = ({ book }: IListItem) => {
  return (
    <StyledListItem>
      <StyledImg src={book.image} alt={book.title} />
      <BookTitle>{book.title}</BookTitle>
      <BookSubtitle>{book.subtitle}</BookSubtitle>
        <BookPrice>
          {book.price === "$0.00" ? "Free for you" : book.price}
        </BookPrice>
    </StyledListItem>
  );
};

export default ListItem;

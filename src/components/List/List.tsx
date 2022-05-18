import { INewBookApi } from "../../services/types";
import ListItem from "../Listitem/ListItem";
import { StyledList } from "./styles";

interface IList {
  books: INewBookApi[];
}

export const List = ({ books }: IList) => {
  return (
    <StyledList>
      {books.map((book) => (
        <ListItem key={book.isbn13} book={book} />
      ))}
    </StyledList>
  );
};

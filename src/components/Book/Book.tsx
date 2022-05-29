import { useEffect } from "react";
import { IDetailsBookApi } from "../../services/types";
import { useAppDispatch } from "../../store/hooks/hooks";
import { addFavotites } from "../../store/slice/userSlice";
import { IBook } from "../../store/types";
import { Heard } from "../Heard/Heard";
import Subscribe from "../Subscribe/Subscribe";
import {
  StyledBook,
  BookImageContainer,
  BookImage,
  BookInfoContainer,
  RateContainer,
  BookPrice,
  BookRating,
  InfoList,
  Parameters,
  Attribute,
  AddButton,
  ButtonDetails,
  ArrowDown,
  StyledLink,
  Tab,
  TabContainer,
  Description,
  DetailsList,
  PreviewButton,
  HeardContainer,
} from "./styles";
interface IBookDetails {
  book: IDetailsBookApi;
}

const Book = ({ book }: IBookDetails) => {
  const previews = book.pdf ? Object.values(book.pdf) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useAppDispatch();

  const handleFavorites = (book: IBook) => {
    dispatch(addFavotites(book));
  }

  return (
    <>
      <StyledBook>
        <BookImageContainer>
          <HeardContainer type="button" onClick={() => handleFavorites(book)}>
            <Heard />
          </HeardContainer>
          <BookImage src={book.image} alt={book.title} />
        </BookImageContainer>
        <BookInfoContainer>
          <RateContainer>
            <BookPrice>
              {book.price === "$0.00" ? "Free for you" : book.price}
            </BookPrice>
            <BookRating>{book.rating}</BookRating>
          </RateContainer>
          <InfoList>
            <Parameters>Authors</Parameters>
            <Attribute>{book.authors}</Attribute>
            <Parameters>Publisher</Parameters>
            <Attribute>{book.publisher}</Attribute>
            <Parameters>Language</Parameters>
            <Attribute>{book.language}</Attribute>
            <Parameters>Pages</Parameters>
            <Attribute>{book.pages}</Attribute>
            <Parameters>Year</Parameters>
            <Attribute>{book.year}</Attribute>
          </InfoList>
          <ButtonDetails>
            <StyledLink to="details" duration={1000} smooth={true}>
              More detailse
              <ArrowDown />
            </StyledLink>
          </ButtonDetails>
          <AddButton>add to cart</AddButton>
          {previews.map((preview) => (
            <PreviewButton href={preview}>Preview book</PreviewButton>
          ))}
        </BookInfoContainer>
      </StyledBook>

      <TabContainer>
        <Tab>Description</Tab>
        <Tab>Authors</Tab>
        <Tab>Reviews</Tab>
      </TabContainer>
      <Description>{book.desc}</Description>

      <DetailsList id="details">
        <Parameters>Authors</Parameters>
        <Attribute>{book.authors}</Attribute>
        <Parameters>Publisher</Parameters>
        <Attribute>{book.publisher}</Attribute>
        <Parameters>Language</Parameters>
        <Attribute>{book.language}</Attribute>
        <Parameters>Pages</Parameters>
        <Attribute>{book.pages}</Attribute>
        <Parameters>Year</Parameters>
        <Attribute>{book.year}</Attribute>
        <Parameters>ISBN 10</Parameters>
        <Attribute>{book.isbn10}</Attribute>
        <Parameters>ISBN 13</Parameters>
        <Attribute>{book.isbn13}</Attribute>
        <Parameters>URL </Parameters>
        <Attribute>{book.url}</Attribute>
      </DetailsList>

      <Subscribe />
    </>
  );
};

export default Book;

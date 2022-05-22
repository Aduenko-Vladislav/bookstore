import { IDetailsBookApi } from "../../services/types";
import Subscribe from "../Subscribe/Subscribe";
import { Container } from "../Subscribe/styles";
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
} from "./styles";

interface IBookDetails {
  book: IDetailsBookApi;
}

const Book = ({ book }: IBookDetails) => {
  return (
    <>
      <StyledBook>
        <BookImageContainer>
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
        </BookInfoContainer>
      </StyledBook>

      <Container>
        <TabContainer>
          <Tab>Description</Tab>
          <Tab>Authors</Tab>
          <Tab>Reviews</Tab>
        </TabContainer>
      </Container>

      <Container>
        <Description>{book.desc}</Description>
      </Container>

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

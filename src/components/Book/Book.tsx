import { ReactNode, useEffect, useState } from "react";
import { StarBlack, StarLight } from "../../assets/icons";
import { IDetailsBookApi } from "../../services/types";
import { useAppDispatch } from "../../store/hooks/hooks";
import { addFavotites } from "../../store/slices/userSlice";
import { IBook } from "../../store/types";
import { Heard } from "../Heard/Heard";
import Subscribe from "../Subscribe/Subscribe";
import { v4 as uuidv4 } from "uuid";
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
  TabPanel,
  IconFacebook,
  Icons,
  IconsItem,
  IconTwitter,
} from "./styles";
import { addCart } from "../../store/slices/cartSlice";
interface IBookDetails {
  book: IDetailsBookApi;
}

const Book = ({ book }: IBookDetails) => {
  const previews = book.pdf ? Object.values(book.pdf) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const drawRating = (rating: string): ReactNode[] => {
    const stars = [];
    let id = {};
    for (let i = 0; i <= 4; i++) {
      id = uuidv4();
      if (i < +rating) {
        stars.push(<StarBlack key={`${id}`} />);
      } else {
        stars.push(<StarLight key={`${id}`} />);
      }
    }
    return stars;
  };

  const dispatch = useAppDispatch();
  const handleCart = (book: IDetailsBookApi) => {
    dispatch(addCart({ ...book, amount: 1 }));
  };

  const handleFavorites = (book: IBook) => {
    dispatch(addFavotites(book));
  };

  const [active, setActive] = useState<string>("description");
  const handleDescription = () => {
    setActive("description");
  };

  const handleAuthors = () => {
    setActive("authors");
  };

  return (
    <>
      <StyledBook key={book.isbn13}>
        <BookImageContainer>
          <HeardContainer type="button" onClick={() => handleFavorites(book)}>
            <Heard />
          </HeardContainer>
          <BookImage src={book.image} alt={book.title} />
        </BookImageContainer>
        <BookInfoContainer>
          <RateContainer>
            <BookPrice>
              {book.price === "$0.00" ? "Not Available" : book.price}
            </BookPrice>
            <BookRating>{drawRating(`${book.rating}`)}</BookRating>
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
          <AddButton type="button" onClick={() => handleCart(book)}>
            add to cart
          </AddButton>
          {previews.map((preview) => (
            <PreviewButton href={preview} key={book.isbn13}>
              Preview book
            </PreviewButton>
          ))}
        </BookInfoContainer>
      </StyledBook>

      <TabContainer>
        <Tab isActive={active === "description"} onClick={handleDescription}>
          Description
        </Tab>
        <Tab isActive={active === "authors"} onClick={handleAuthors}>
          Authors
        </Tab>
      </TabContainer>
      <TabPanel>
        {active === "description" ? (
          <Description>{book.desc}</Description>
        ) : active === "authors" ? (
          <Description>{book.authors}</Description>
        ) : (
          "Oooops 🙈"
        )}
      </TabPanel>

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

      <Icons>
        <IconsItem href="https://facebook.com">
          <IconFacebook id="facebook" />
        </IconsItem>
        <IconsItem href="https://twitter.com">
          <IconTwitter id="twitter" />
        </IconsItem>
      </Icons>
      <Subscribe />
    </>
  );
};

export default Book;

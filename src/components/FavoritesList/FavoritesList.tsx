import { useAppSelector } from "../../store/hooks/hooks";
import { getUserInfo } from "../../store/selectors/userSelectors";
import { Container } from "../MainTemplate/styles";
import {
  DescriptionContainer,
  FavoritesImg,
  FavoritesPrice,
  FavoritesSubtitle,
  FavoritesTitle,
  StyledFavoritesList,
  StyledLink,
} from "./styles";

export const FavoritesList = () => {
  const { favorites } = useAppSelector(getUserInfo);

  return (
    <StyledFavoritesList>
      {favorites.map((book) => {
        return (
          <Container key={book.isbn13}>
            <StyledLink to={`/bookstore/books/${book.isbn13}`}>
              <FavoritesImg src={book.image} alt={book.title} />
              <DescriptionContainer>
                <FavoritesTitle>{book.title}</FavoritesTitle>
                <FavoritesSubtitle>{book.subtitle}</FavoritesSubtitle>
                <FavoritesPrice>
                  {book.price === "$0.00" ? "Free for you" : book.price}
                </FavoritesPrice>
              </DescriptionContainer>
            </StyledLink>
          </Container>
        );
      })}
    </StyledFavoritesList>
  );
};

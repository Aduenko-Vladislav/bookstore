import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { getUserInfo } from "../../store/selectors/userSelectors";
import { removeFavorite } from "../../store/slices/userSlice";
import { IBook } from "../../store/types";
import { HeardRemove } from "../HeardRemove/HeardRemove";
import {
  Container,
  DescriptionContainer,
  FavoritesImg,
  FavoritesPrice,
  FavoritesSubtitle,
  FavoritesTitle,
  RemoveContainer,
  StyledFavoritesList,
  StyledLink,
} from "./styles";

export const FavoritesList = () => {
  const { favorites } = useAppSelector(getUserInfo);

  const dispatch = useAppDispatch();
  const handleRemoveFavorite = (book: IBook) => {
    dispatch(removeFavorite(book));
  };
  return (
    <StyledFavoritesList>
      {favorites.map((book) => {
        return (
          <Container key={book.isbn13}>
            <StyledLink to={`/books/${book.isbn13}`}>
              <FavoritesImg src={book.image} alt={book.title} />
              <DescriptionContainer>
                <FavoritesTitle>{book.title}</FavoritesTitle>
                <FavoritesSubtitle>{book.subtitle}</FavoritesSubtitle>
                <FavoritesPrice>
                  {book.price === "$0.00" ? "Not Available" : book.price}
                </FavoritesPrice>
              </DescriptionContainer>
            </StyledLink>
            <RemoveContainer
              type="button"
              onClick={() => handleRemoveFavorite(book)}
            >
              <HeardRemove />
            </RemoveContainer>
          </Container>
        );
      })}
    </StyledFavoritesList>
  );
};

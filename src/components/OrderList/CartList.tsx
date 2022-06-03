import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { getCartInfo } from "../../store/selectors/cartSelectors";
import { removeCart } from "../../store/slices/cartSlice";
import { ICartInfo } from "../../store/types";

import { HeardRemove } from "../HeardRemove/HeardRemove";
import {
  CartImg,
  CartPrice,
  CartSubtitle,
  CartTitle,
  Container,
  DescriptionContainer,
  RemoveContainer,
  StyledCartList,
  StyledLink,
} from "./styles";

export const CartList = () => {
  const { cart } = useAppSelector(getCartInfo);

  const dispatch = useAppDispatch();
  const handleRemoveCart = (book: ICartInfo) => {
    dispatch(removeCart(book));
  };
  return (
    <StyledCartList>
      {cart.map((book: ICartInfo) => {
        return (
          <Container key={book.isbn13}>
            <StyledLink to={`/bookstore/books/${book.isbn13}`}>
              <CartImg src={book.image} alt={book.title} />
              <DescriptionContainer>
                <CartTitle>{book.title}</CartTitle>
                <CartSubtitle>
                  {book.subtitle}, {book.publisher}
                  {book.year}
                </CartSubtitle>
                <CartPrice>
                  {book.price === "$0.00" ? "Free for you" : book.price}
                </CartPrice>
              </DescriptionContainer>
            </StyledLink>
            <RemoveContainer
              type="button"
              onClick={() => handleRemoveCart(book)}
            >
              <HeardRemove />
            </RemoveContainer>
          </Container>
        );
      })}
    </StyledCartList>
  );
};

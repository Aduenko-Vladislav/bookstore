import { useState, useEffect } from "react";
import { Delete, Minus, Plus } from "../../assets/icons";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { getCartInfo } from "../../store/selectors/cartSelectors";
import {
  decreaseAmount,
  increaseAmount,
  removeCart,
} from "../../store/slices/cartSlice";
import { IBookCartApi } from "../../store/types";

import {
  AmountContainer,
  BookContainer,
  Button,
  CartImg,
  CartPrice,
  CartSubtitle,
  CartTitle,
  Container,
  Count,
  DescriptionContainer,
  RemoveContainer,
  StyledCartList,
  StyledLink,
  TotalContainer,
  TotalPrice,
} from "./styles";

export const CartList = () => {
  const { cart } = useAppSelector(getCartInfo);

  const dispatch = useAppDispatch();
  const handleRemoveCart = (book: any) => {
    dispatch(removeCart(book));
  };
  const handlePlus = (book: IBookCartApi) => {
    dispatch(increaseAmount(book));
  };

  const handleMinus = (book: IBookCartApi) => {
    if (book.amount > 1) {
      dispatch(decreaseAmount(book));
    }
  };
  const [total, setTotal] = useState(0.0);
  useEffect(() => {
    let totalAmount = 0.0;
    cart.forEach((book) => {
      totalAmount += Number(+book.amount) * +book.price.slice(1);
    });
    setTotal(totalAmount);
  }, [cart]);

  return (
    <>
      <StyledCartList>
        {cart.map((book: IBookCartApi) => {
          return (
            <Container key={book.isbn13}>
              <BookContainer>
                <StyledLink to={`/bookstore/books/${book.isbn13}`}>
                  <CartImg src={book.image} alt={book.title} />
                </StyledLink>
                <DescriptionContainer>
                  <CartTitle>{book.title}</CartTitle>
                  <CartSubtitle>
                    {book.subtitle === "" ? "" : `${book.subtitle}, `}
                  </CartSubtitle>
                  <CartSubtitle>
                    {book.publisher} {book.year}
                  </CartSubtitle>
                  <AmountContainer>
                    <Button>
                      <Plus onClick={() => handlePlus(book)} />
                    </Button>
                    <Count>{book.amount}</Count>
                    <Button>
                      <Minus onClick={() => handleMinus(book)} />
                    </Button>
                  </AmountContainer>
                </DescriptionContainer>
                <CartPrice>
                  {book.price === "$0.00"
                    ? "Not Available"
                    : `${(Number(book.price.slice(1)) * book.amount).toFixed(
                        2
                      )} $`}
                </CartPrice>
              </BookContainer>
              <RemoveContainer
                type="button"
                onClick={() => handleRemoveCart(book)}
              >
                <Delete />
              </RemoveContainer>
            </Container>
          );
        })}
      </StyledCartList>
      <TotalContainer>
        <TotalPrice>Total: ${+total.toFixed(2)} </TotalPrice>
      </TotalContainer>
    </>
  );
};

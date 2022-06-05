import { useEffect } from "react";
import { BookSlider } from "../components/BookSlider/BookSlider";
import { BookList } from "../components/BookList/BookList";
import Subscribe from "../components/Subscribe/Subscribe";
import { Title } from "../components/Title/Title";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { fetchBook } from "../store/slices/bookSlice";
import { getBooks } from "../store/selectors/bookSelectors";

export const Home = () => {
  const dispatch = useAppDispatch();
  const {books} = useAppSelector(getBooks);
  useEffect(() => {
    dispatch(fetchBook());
  }, [dispatch]);


  return (
    <>
      <BookSlider books={books} />
      <Title>New Releases Books</Title>
      <BookList books={books} />
      <Subscribe />
    </>
  );
};

import { useEffect } from "react";
import { BookSlider } from "../components/BookSlider/BookSlider";
import { BookList } from "../components/BookList/BookList";
import Subscribe from "../components/Subscribe/Subscribe";
import { Title } from "../components/Title/Title";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { fetchBook } from "../store/slices/bookSlice";
import { getBooks, getBooksStatus } from "../store/selectors/bookSelectors";
import { Loading } from "../components/Loading/Loading";

export const Home = () => {
  const dispatch = useAppDispatch();
  const { books } = useAppSelector(getBooks);
  useEffect(() => {
    dispatch(fetchBook());
  }, [dispatch]);

  const status = useAppSelector(getBooksStatus);
  if (status === "loading") {
    return <Loading />;
  }
  if (status === "error") {
    return <Title>WE have some Problems</Title>;
  }

  return (
    <>
      <BookSlider books={books} />
      <Title>New Releases Books</Title>
      <BookList books={books} />
      <Subscribe />
    </>
  );
};

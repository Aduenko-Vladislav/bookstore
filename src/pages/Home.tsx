import { useEffect, useState } from "react";
import { BookSlider } from "../components/BookSlider/BookSlider";
import { BookList } from "../components/BookList/BookList";
import Subscribe from "../components/Subscribe/Subscribe";
import { Title } from "../components/Title/Title";
import { bookApi } from "../services/bookService";
import { INewBooksApi } from "../services/types";

export const Home = () => {
  // const newBooks = useAppSelector(getNewBooks);
  // const status = useAppSelector(getNewBooksStatus);
  // const error = useAppSelector(getNewBooksError);
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(fetchNewBook());
  // }, [dispatch]);

  // if (status === "loading") {
  //   return <div>Loading...</div>;
  // }

  // if (status === "error") {
  //   return <div>Error:{error}</div>;
  // }
  // bookApi.getNewBooks().then((res) => {
  //   console.log(res);
  // });

  const [newBooks, setNewBooks] = useState<INewBooksApi>({
    books: [],
    error: "",
    total: "",
  });

  useEffect(() => {
    bookApi.getNewBooks().then((books) => {
      setNewBooks(books);
    });
  }, []);

  return (
    <>
      <BookSlider books={newBooks.books} />
      <Title>New Releases Books</Title>
      <BookList books={newBooks.books} />
      <Subscribe />
    </>
  );
};

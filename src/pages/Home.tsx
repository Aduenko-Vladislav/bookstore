import { useEffect, useState } from "react";
import { BookSlider } from "../components/BookSlider/BookSlider";
import { BookList } from "../components/BookList/BookList";
import Subscribe from "../components/Subscribe/Subscribe";
import { Title } from "../components/Title/Title";
import { bookApi } from "../services/bookService";
import { INewBooksApi } from "../services/types";

export const Home = () => {
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

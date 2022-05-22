import { useEffect, useState } from "react";
import { List } from "../components/List/List";
import { Container } from "../components/Subscribe/styles";
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
    <Container>
      <Title>New Releases Books</Title>
      <List books={newBooks.books} />
      <Subscribe />
    </Container>
  );
};

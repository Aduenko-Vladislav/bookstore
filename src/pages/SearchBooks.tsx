import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BookList } from "../components/BookList/BookList";
import BackButton from "../components/BackButton/BackButton";
import { Title } from "../components/Title/Title";
import { bookApi } from "../services/bookService";
import { ISearchBooksApi } from "../services/types";

export const SearchBooks = () => {
  const { title = "", page = "" } = useParams();

  const [searchResult, setSearchResult] = useState<ISearchBooksApi>();
  useEffect(() => {
    bookApi.getBooksBySearch(title, page).then((books) => {
      setSearchResult(books);
    });
  }, [title, page]);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <BackButton onClick={handleBack} />
      <Title>"{title}" Search results</Title>
      <BookList books={searchResult?.books ? searchResult?.books : []} />
    </>
  );
};

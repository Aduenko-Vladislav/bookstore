import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BookList } from "../components/BookList/BookList";
import BackButton from "../components/BackButton/BackButton";
import { Title } from "../components/Title/Title";
import Pagination from "../components/Pagination/Pagination";
import { useAppSelector, useAppDispatch } from "../store/hooks/hooks";
import { getBooks, getBooksStatus } from "../store/selectors/bookSelectors";
import { fetchBooksBySearch } from "../store/slices/bookSlice";
import { Loading } from "../components/Loading/Loading";

export const SearchBooks = () => {
  const { title = "", page = "" } = useParams();
  const { books } = useAppSelector(getBooks);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchBooksBySearch({ title, page }));
  }, [title, dispatch, page]);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const status = useAppSelector(getBooksStatus);
  if (status === "loading") {
    return <Loading />;
  }
  if (status === "error") {
    return <Title>WE have some Problems</Title>;
  }

  return (
    <>
      <BackButton onClick={handleBack} />
      <Title> Search results: "{title}"</Title>
      <BookList books={books ? books : []} />
      <Pagination />
    </>
  );
};

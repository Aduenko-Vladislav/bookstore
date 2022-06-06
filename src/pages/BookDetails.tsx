import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";
import { Title } from "../components/Title/Title";
import Book from "../components/Book/Book";
import { useAppSelector, useAppDispatch } from "../store/hooks/hooks";
import { getBooks, getBooksStatus } from "../store/selectors/bookSelectors";
import { fetchBookDetails } from "../store/slices/bookSlice";
import { Loading } from "../components/Loading/Loading";


export const BookDetails = () => {
  const { id = "" } = useParams();
  const { result } = useAppSelector(getBooks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBookDetails(id));
  }, [id, dispatch]);

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
      <Title>{result.title}</Title>
      <Book book={result} />
    </>
  );
};

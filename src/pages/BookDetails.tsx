import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { bookApi } from "../services/bookService";
import { IDetailsBookApi } from "../services/types";
import BackButton from "../components/BackButton/BackButton";
import { Title } from "../components/Title/Title";
import Book from "../components/Book/Book";

export const BookDetails = () => {
  const { id = "" } = useParams();
  const [detailsBook, setBookDetails] = useState<IDetailsBookApi>({
    authors: "",
    desc: "",
    error: "",
    image: "",
    isbn10: "",
    isbn13: "",
    language: "",
    pages: "",
    pdf: {},
    price: "",
    publisher: "",
    rating: "",
    subtitle: "",
    title: "",
    url: "",
    year: "",
  });

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    bookApi.getBookDetails(id).then((book) => {
      setBookDetails(book);
    });
  }, [id]);

  return (
    <>
      <BackButton onClick={handleBack} />
      <Title>{detailsBook.title}</Title>
      <Book book={detailsBook} />
    </>
  );
};

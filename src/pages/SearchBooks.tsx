import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { List } from "../components/List/List";
import BackButton from "../components/BackButton/BackButton";
import { Title } from "../components/Title/Title";
import { bookApi } from "../services/bookService";
import { ISearchBooksApi } from "../services/types";
import { media } from "../ui/media";

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
    <Container>
      <BackButton onClick={handleBack} />
      <Title>"{title}" Search results</Title>
      <List books={searchResult?.books ? searchResult?.books : []} />
    </Container>
  );
};

const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;

  ${media.tablet} {
    max-width: 688px;
  }
`;

import React from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";
import { FavoritesList } from "../components/FavoritesList/FavoritesList";
import { Title } from "../components/Title/Title";

export const FavoritesBooks = () => {

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      <BackButton onClick={handleBack} />
      <Title>FAVORITES</Title>
      <FavoritesList />
    </>
  );
};

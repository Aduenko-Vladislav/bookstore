import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

const StyledFavoritesList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  position: relative;

  margin-bottom: 20px;

  border-bottom: 1px solid ${Colors.GRAY};
`;

const StyledLink = styled(Link)`
  display: flex;
  margin-bottom: 20px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 450px;
  width: 100%;
`;

const FavoritesImg = styled.img`
  background: ${Colors.BLUE};
  max-width: 226px;
  width: 100%;
  margin: 0 63px 20px;
`;

const FavoritesTitle = styled.p`
  ${typography.H3};
  margin: 65px 0 25px;
  padding: 0 10px;
`;

const FavoritesSubtitle = styled.p`
  ${typography.B2};
  margin-bottom: 15px;
  padding: 0 10px;
`;

const FavoritesPrice = styled.p`
  ${typography.H3};
  align-content: flex-end;

  margin: auto 0 20px;
  padding-left: 10px;
`;

const RemoveContainer = styled.button`
  position: absolute;
  right: 100px;
  top: 70px;
`;

export {
  StyledFavoritesList,
  FavoritesPrice,
  FavoritesTitle,
  FavoritesImg,
  StyledLink,
  DescriptionContainer,
  FavoritesSubtitle,
  Container,
  RemoveContainer,
};

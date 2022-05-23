import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

const StyledListItem = styled.li`
  display: -webkit-box;

  max-width: 352px;
  width: 100%;
  margin: 0 auto;
  border-radius: 5px;

  background: ${Colors.blue};
  box-shadow: 0px 4px 20px 0px rgba(34, 60, 80, 0.44);

  transition: 0.3s linear;
  position: relative;
  bottom: 0;
  &:hover {
    position: relative;
    bottom: 20px;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
`;

const StyledImg = styled.img`
  max-width: 226px;
  width: 100%;
  margin: 0 63px;
`;

const BookTitle = styled.p`
  ${typography.H3};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 64px;
  margin-bottom: 15px;
  padding: 0 10px;
`;

const BookSubtitle = styled.p`
  ${typography.B2};
  margin-bottom: 40px;
  padding: 0 10px;
`;

const BookPrice = styled.p`
  ${typography.H3};
  align-content: flex-end;

  margin-top: auto;
  padding: 0 10px 10px;
`;

export {
  StyledListItem,
  StyledLink,
  BookTitle,
  BookSubtitle,
  BookPrice,
  StyledImg,
};

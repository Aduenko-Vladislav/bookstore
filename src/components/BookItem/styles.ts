import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

const StyledBookItem = styled.li`
  display: -webkit-box;

  max-width: 352px;
  width: 100%;
  margin: 0 auto;
  border-radius: 5px;

  background: ${Colors.BLUE};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;

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
  StyledBookItem,
  StyledLink,
  BookTitle,
  BookSubtitle,
  BookPrice,
  StyledImg,
};

import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

const StyledListItem = styled.li`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: ${Colors.blue};
  box-shadow: 0px 4px 20px 0px rgba(34, 60, 80, 0.44);
  border-radius: 5px;
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
`;

const BookSubtitle = styled.p`
  ${typography.B2};
  margin-bottom: 40px;
`;

const BookPrice = styled.p`
  ${typography.H3};
  align-content: flex-end;
  margin-top: auto;
`;

export { StyledListItem, BookTitle, BookSubtitle, BookPrice, StyledImg };

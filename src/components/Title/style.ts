import styled from "styled-components";
import { typography } from "../../ui/typography";

export const StyledTitle = styled.h1`
  ${typography.H1};
  max-width: 1000px;
  width: 100%;

  margin-bottom: 48px;

  text-overflow: ellipsis;
  overflow: hidden;
`;

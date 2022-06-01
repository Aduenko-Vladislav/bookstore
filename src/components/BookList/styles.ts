import styled from "styled-components";
import { Colors } from "../../ui/colors";

export const StyledBookList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(352px, 1fr));
  column-gap: 32px;
  row-gap: 49px;

  padding-bottom: 90px;
  margin-bottom: 30px;

  list-style: none;
  border-bottom: 1px solid ${Colors.GRAY};
`;

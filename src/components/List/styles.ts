import styled from "styled-components";

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(352px, 1fr));
  column-gap: 32px;
  row-gap: 49px;

  margin-bottom: 120px;

  list-style: none;
`;

import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeaderNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 184px;
  width: 100%;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 56px;
  height: 56px;
`;

export const NavIcon = styled.img`
  width: 24px;
  height: 24px;
`;

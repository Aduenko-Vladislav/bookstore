import { Link } from "react-router-dom";
import styled from "styled-components";
import { Like, Order, User } from "../../assets/svg";
import { media } from "../../ui/media";

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 184px;
  width: 100%;
  ${media.tablet} {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 56px;
  height: 56px;
`;

const NavIconLike = styled(Like)`
  width: 24px;
  height: 24px;
`;
const NavIconOrder = styled(Order)`
  width: 24px;
  height: 24px;
`;
const NavIconUser = styled(User)`
  width: 24px;
  height: 24px;
`;

export { NavIconLike, StyledLink, StyledNav, NavIconOrder, NavIconUser };

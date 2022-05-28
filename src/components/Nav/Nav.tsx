import { routes } from "../../routes/routes";
import {
  NavIconFavorites,
  NavIconOrder,
  NavIconUser,
  StyledLink,
  StyledNav,
} from "./styles";
export const Nav = () => {
  return (
    <StyledNav>
      <StyledLink to={routes.FAVORITES}>
        <NavIconFavorites />
      </StyledLink>
      <StyledLink to="/">
        <NavIconOrder />
      </StyledLink>
      <StyledLink to="/">
        <NavIconUser />
      </StyledLink>
    </StyledNav>
  );
};

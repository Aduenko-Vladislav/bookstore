import {
  NavIconLike,
  NavIconOrder,
  NavIconUser,
  StyledLink,
  StyledNav,
} from "./styles";
export const Nav = () => {
  return (
    <StyledNav>
      <StyledLink to="/">
        <NavIconLike />
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

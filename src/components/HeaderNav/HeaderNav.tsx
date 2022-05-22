import {
  NavIconLike,
  NavIconOrder,
  NavIconUser,
  StyledHeaderNav,
  StyledLink,
} from "./styles";
const HeaderNav = () => {
  return (
    <StyledHeaderNav>
      <StyledLink to="/">
        <NavIconLike />
      </StyledLink>
      <StyledLink to="/">
        <NavIconOrder />
      </StyledLink>
      <StyledLink to="/">
        <NavIconUser />
      </StyledLink>
    </StyledHeaderNav>
  );
};

export default HeaderNav;

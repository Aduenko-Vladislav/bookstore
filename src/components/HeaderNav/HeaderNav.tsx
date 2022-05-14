import { NavIcon, StyledHeaderNav, StyledLink } from "./styles";
import like from "../../assets/svg/like.svg";
import orders from "../../assets/svg/shopping-bag.svg";
import profile from "../../assets/svg/user.svg";

const HeaderNav = () => {
  return (
    <StyledHeaderNav>
      <StyledLink to="/">
        <NavIcon src={like} alt="like" />
      </StyledLink>
      <StyledLink to="/">
        <NavIcon src={orders} alt="orders" />
      </StyledLink>
      <StyledLink to="/">
        <NavIcon src={profile} alt="profile" />
      </StyledLink>
    </StyledHeaderNav>
  );
};

export default HeaderNav;

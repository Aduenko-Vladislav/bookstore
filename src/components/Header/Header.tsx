import { Logo, StyledHeader, StyledWrapper } from "./styles";
import logo from "../../assets/svg/logo.svg";
import HeaderForm from "../HeaderForm/HeaderForm";
import HeaderNav from "../HeaderNav/HeaderNav";

const Header = () => {
  return (
    <StyledHeader>
      <StyledWrapper>
        <Logo src={logo} alt="logo" />
        <HeaderForm />
        <HeaderNav />
      </StyledWrapper>
    </StyledHeader>
  );
};

export default Header;

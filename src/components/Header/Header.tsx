import { Container, HeaderWrapper, Logo } from "./styles";
import logo from "../../assets/svg/logo.svg";
import HeaderForm from "../HeaderForm/HeaderForm";
import HeaderNav from "../HeaderNav/HeaderNav";

const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Logo src={logo} alt="logo" />
        <HeaderForm />
        <HeaderNav />
      </HeaderWrapper>
    </Container>
  );
};

export default Header;

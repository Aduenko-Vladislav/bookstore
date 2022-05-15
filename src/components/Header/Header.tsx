import { Container, StyledHeader, Logo } from "./styles";
import logo from "../../assets/svg/logo.svg";
import HeaderForm from "../HeaderForm/HeaderForm";
import HeaderNav from "../HeaderNav/HeaderNav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Link to={"/bookstore"}>
          <Logo src={logo} alt="logo" />
        </Link>
        <HeaderForm />
        <HeaderNav />
      </Container>
    </StyledHeader>
  );
};

export default Header;

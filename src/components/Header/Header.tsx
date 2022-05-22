import { Container, Logo, StyledHeader } from "./styles";
import HeaderForm from "../HeaderForm/HeaderForm";
import HeaderNav from "../HeaderNav/HeaderNav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Link to={"/bookstore"}>
          <Logo />
        </Link>
        <HeaderForm />
        <HeaderNav />
      </Container>
    </StyledHeader>
  );
};

export default Header;

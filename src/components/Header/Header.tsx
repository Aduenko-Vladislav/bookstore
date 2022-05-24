import { Container, Logo, StyledHeader } from "./styles";
import { Form } from "../Form/Form";
import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Link to={"/bookstore"}>
          <Logo />
        </Link>
        <Form />
        <Nav />
      </Container>
    </StyledHeader>
  );
};

export default Header;

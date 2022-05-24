import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Container, StyledApp } from "./styles";

const MainTemplate = () => {
  return (
    <StyledApp>
      <Container>
        <Header />
        <Outlet />
        <Footer />
      </Container>
    </StyledApp>
  );
};

export default MainTemplate;

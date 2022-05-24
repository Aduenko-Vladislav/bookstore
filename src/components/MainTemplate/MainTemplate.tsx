import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Container } from "./styles";

const MainTemplate = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default MainTemplate;

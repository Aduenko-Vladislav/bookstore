import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Subscribe from "./Subscribe/Subscribe";

const MainTemplate = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Subscribe />
      <Footer />
    </>
  );
};

export default MainTemplate;

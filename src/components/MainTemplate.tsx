import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const MainTemplate = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainTemplate;

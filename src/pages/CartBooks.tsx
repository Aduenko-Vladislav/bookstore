import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";
import { CartList } from "../components/CartList/CartList";
import { Title } from "../components/Title/Title";
import { routes } from "../routes/routes";
import { RootState } from "../store/store";

export const CartBooks = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const { isAuth } = useSelector(({ user }: RootState) => user);
  if (isAuth) {
    return (
      <>
        <BackButton onClick={handleBack} />
        <Title>Your cart</Title>
        <CartList />
      </>
    );
  }
  return <Navigate to={routes.SIGN_IN} />;
};

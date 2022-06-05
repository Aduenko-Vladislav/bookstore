import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";
import { CartList } from "../components/CartList/CartList";
import { Title } from "../components/Title/Title";

export const CartBooks = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      <BackButton onClick={handleBack} />
      <Title>Your cart</Title>
      <CartList />
    </>
  );
};

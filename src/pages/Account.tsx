import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";
import { Profile } from "../components/Profile/Profile";
import { Title } from "../components/Title/Title";
import { routes } from "../routes/routes";
import { RootState } from "../store/store";

export const Account = () => {
  const { isAuth } = useSelector(({ user }: RootState) => user);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  if (isAuth) {
    return (
      <>
        <BackButton onClick={handleBack} />
        <Title>Account</Title>
        <Profile />
      </>
    );
  }
  return <Navigate to={routes.SIGN_IN} />;
};

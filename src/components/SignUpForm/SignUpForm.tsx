import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/routes";
import { setUser, setUserName } from "../../store/slices/userSlice";
import {
  Block,
  ErrorMassage,
  Label,
  Login,
  LoginButton,
  LoginForm,
  LoginPass,
  SignUpInput,
  StyledSignUpForm,
  TabIn,
  Tabs,
  TabUp,
} from "./styles";

export const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [isSignupError, setIsSignUpError] = useState(false);

  const onSubmit = (data: any) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        dispatch(setUser(userCredential.user.email));
        dispatch(setUserName(data.name));
        navigate(routes.SIGN_IN);
      })
      .catch((error) => {
        setIsSignUpError(true);
      });
  };

  return (
    <StyledSignUpForm onSubmit={handleSubmit(onSubmit)}>
      <Block>
        <Tabs>
          <TabIn to={routes.SIGN_IN}>sign in</TabIn>
          <TabUp to={routes.SIGN_UP}>sign up</TabUp>
        </Tabs>
      </Block>
      <LoginForm>
        <Login>
          <Label>Name</Label>
          <SignUpInput
            type="text"
            placeholder="Your name"
            {...register("name")}
          />
        </Login>
        <Login>
          <Label>Email</Label>
          <SignUpInput
            type="email"
            placeholder="Your email"
            {...register("email")}
          />
        </Login>
        <LoginPass>
          <Label>Password</Label>
          <SignUpInput
            type="password"
            placeholder="Your password"
            {...register("password")}
          />
        </LoginPass>
        {isSignupError ? (
          <ErrorMassage>Check the correctness of the data</ErrorMassage>
        ) : (
          ""
        )}
        <LoginButton type="submit">sign up</LoginButton>
      </LoginForm>
    </StyledSignUpForm>
  );
};

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/routes";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  Block,
  ForgotPass,
  SignInInput,
  Label,
  Login,
  LoginButton,
  LoginForm,
  StyledSignInForm,
  TabIn,
  Tabs,
  TabUp,
  ErrorMassage,
} from "./styles";

import { useState } from "react";
import {
  setUser,
  setUserName,
  setPassword,
} from "../../store/slices/userSlice";
import { useAppDispatch } from "../../store/hooks/hooks";

export const SignInForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  const [isSignInError, setIsSignInError] = useState(false);

  const onSubmit = ({ email, password, name }: any) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(setUser(userCredential.user.email));
        dispatch(setUserName(name));
        dispatch(setPassword(password));
        navigate(routes.ACCOUNT);
      })
      .catch((error) => {
        setIsSignInError(true);
      });
  };

  return (
    <StyledSignInForm onSubmit={handleSubmit(onSubmit)}>
      <Block>
        <Tabs>
          <TabIn to={routes.SIGN_IN}>sign in</TabIn>
          <TabUp to={routes.SIGN_UP}>sign up</TabUp>
        </Tabs>
      </Block>
      <LoginForm>
        <Login>
          <Label>Name</Label>
          <SignInInput
            type="text"
            placeholder="Enter your name"
            {...register("name")}
          />
        </Login>
        <Login>
          <Label>Email</Label>
          <SignInInput
            type="email"
            placeholder="Enter your email"
            {...register("email")}
          />
        </Login>
        <Login>
          <Label>Password</Label>
          <SignInInput
            type="password"
            placeholder="Enter your password"
            {...register("password")}
          />
        </Login>
        <ForgotPass>Forgot password ?</ForgotPass>
        {isSignInError ? (
          <ErrorMassage>Incorrect email or password. Try again</ErrorMassage>
        ) : (
          ""
        )}
        <LoginButton type="submit">sign in</LoginButton>
      </LoginForm>
    </StyledSignInForm>
  );
};

import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

const StyledSignInForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 0 auto;
  margin-bottom: 200px;

  max-width: 544px;
  width: 100%;

  border: 1px solid ${Colors.GRAY};
`;
const Block = styled.div`
  max-width: 544px;
  width: 100%;
  border-bottom: 1px solid ${Colors.GRAY};
`;
const Tabs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;
const TabIn = styled(Link)`
  width: 239px;
  padding: 24px 0;

  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  text-transform: uppercase;
  text-align: center;

  color: ${Colors.SECONDARY};
  border-bottom: 1px solid ${Colors.PRIMARY};
`;
const TabUp = styled(Link)`
  width: 239px;
  padding: 24px 0;

  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  text-transform: uppercase;
  text-align: center;

  color: ${Colors.SECONDARY};
`;

const LoginForm = styled.form`
  padding: 40px 32px;
  width: 100%;
`;
const Login = styled.div`
  margin-bottom: 20px;

  width: 100%;
`;
const Label = styled.p`
  margin-bottom: 5px;

  font-weight: 700;
  font-size: 16px;
  line-height: 32px;

  cursor: pointer;
`;
const SignInInput = styled.input`
  max-width: 480px;
  width: 100%;
  padding: 14px 0 10px 20px;

  border: 1px solid ${Colors.GRAY};
`;
const ForgotPass = styled.p`
  ${typography.B1}
  margin-bottom: 10px;

  font-size: 12px;
`;

const LoginButton = styled.button`
  ${typography.button}
  max-width: 480px;
  width: 100%;
`;

const ErrorMassage = styled.div`
  margin-bottom: 5px;

  width: 100%;
  height: 40px;
  text-align: center;

  background-color: #fbe9e7;
  ${typography.B1}
  color: #c72929;
`;

export {
  StyledSignInForm,
  Block,
  Tabs,
  TabIn,
  TabUp,
  LoginForm,
  Login,
  Label,
  SignInInput,
  ForgotPass,
  LoginButton,
  ErrorMassage,
};

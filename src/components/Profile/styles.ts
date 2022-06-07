import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

export const Subtitle = styled.h3`
  margin-bottom: 16px;
  text-align: center;
  ${typography.H3}
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  max-width: 554px;
  width: 100%;

  margin: 0 auto 0px;
`;

export const DataContainer = styled.div`
  max-width: 554px;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;

  margin-bottom: 40px;
  ${typography.input}
  padding: 12px 0px 12px 12px;
  border: 1px solid ${Colors.GRAY};
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
  }  ${media.mobile} {
    padding: 12px 0px 12px 5px;
  }
`;

export const Lable = styled.p`
  margin-bottom: 10px;
  ${typography.B1}
  cursor: pointer;
`;

export const Form = styled.form`
  margin: 0 auto 40px;
  max-width: 564px;
`;

export const Button = styled.button`
  ${typography.button}
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 300px;
  width: 100%;
`;

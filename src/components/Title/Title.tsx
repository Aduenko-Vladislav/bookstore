import { ReactNode } from "react";
import { StyledTitle } from "./style";

interface ITitle {
  children: ReactNode;
}

export const Title = ({ children }: ITitle) => {
  return <StyledTitle>{children}</StyledTitle>;
};

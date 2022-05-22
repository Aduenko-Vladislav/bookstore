import { css } from "styled-components";
import { Colors } from "./colors";
import { media } from "./media";

const H1 = css`
  font-size: 56px;
  font-weight: 700;
  line-height: 64px;

  ${media.mobile} {
    font-size: 32px;
    line-height: 44px;
  }
`;

const H2 = css`
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;

  ${media.mobile} {
    font-size: 28px;
    line-height: 40px;
  }
`;

const H3 = css`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: ${Colors.primary};
`;

const S1 = css`
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.05em;
`;

const B1 = css`
  font-size: 16px;
  line-height: 32px;
  color: ${Colors.primary};
`;

const B2 = css`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: ${Colors.secondary};
`;

const button = css`
  margin: 0 auto;
  padding: 16px 0;

  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${Colors.white};
  background-color: ${Colors.primary};
  &:hover,
  :active {
    background-color: ${Colors.primary2};
  }
  ${media.tablet} {
    font-size: 18px;
  }
`;

const input = css`
  font-size: 16px;
  line-height: 32px;
  padding: 12px 20px;
  color: ${Colors.secondary};
`;

const tab = css`
  font-size: 16px;
  line-height: 24px;
  color: ${Colors.primary};
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid ${Colors.primary};
  }
  &:active {
    border-bottom: 2px solid ${Colors.red};
  }
`;

const link = css`
  font-size: 16px;
  line-height: 24px;
  color: ${Colors.primary};
`;

export const typography = {
  H1,
  H2,
  H3,
  S1,
  B1,
  B2,
  button,
  input,
  tab,
  link,
};

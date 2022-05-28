import { css } from "styled-components";
import { Colors } from "./colors";
import { media } from "./media";

const H1 = css`
  font-size: 56px;
  font-weight: 700;
  line-height: 64px;
  text-transform: capitalize;
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
  color: ${Colors.PRIMARY};
`;

const S1 = css`
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.05em;
`;

const B1 = css`
  font-size: 16px;
  line-height: 32px;
  color: ${Colors.PRIMARY};
`;

const B2 = css`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: ${Colors.SECONDARY};
`;

const button = css`
  margin: 0 auto;
  padding: 14px 16px;

  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${Colors.WHITE};
  background-color: ${Colors.PRIMARY};
  &:hover,
  :active {
    background-color: ${Colors.PRIMARYLIGHT};
  }
  ${media.tablet} {
    font-size: 18px;
  }
`;

const input = css`
  font-size: 16px;
  line-height: 32px;
  padding: 12px 20px;
  color: ${Colors.SECONDARY};
`;

const tab = css`
  font-size: 16px;
  line-height: 24px;
  color: ${Colors.PRIMARY};
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid ${Colors.PRIMARY};
  }
  &:active {
    border-bottom: 2px solid ${Colors.RED};
  }
`;

const link = css`
  font-size: 16px;
  line-height: 24px;
  color: ${Colors.PRIMARY};
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

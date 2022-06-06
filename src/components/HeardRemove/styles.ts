import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

export const StyledHeardRemove = styled.div`
  ${typography.button}
  ${media.tablet} {
    padding: 10px 12px 7px;
  }
  ${media.mobile} {
    padding: 7px 9px;
  }
  &:hover,
  :active {
    path {
      stroke: ${Colors.WHITE};
      fill: ${Colors.WHITE};
    }
  }
  &:disabled {
    background-color: ${Colors.SECONDARY};
  }
`;

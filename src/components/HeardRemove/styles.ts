import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

export const StyledHeardRemove = styled.div`
  ${typography.button}
  &:hover,:active {
    path {
      stroke: ${Colors.WHITE};
      fill: ${Colors.WHITE};
    }
  }
  &:disabled {
    background-color: ${Colors.SECONDARY};
  }
`;

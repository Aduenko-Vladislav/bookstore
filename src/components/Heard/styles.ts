import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

export const StyledHeard = styled.div`
  ${typography.button}
  background-color: ${Colors.PRIMARY};
  transition: .3s linear;
  &:hover {
    path {
      stroke: ${Colors.RED};
    }
  }
  &:active {
    path {
      fill: ${Colors.RED};
    }
  }
  &:disabled {
    background-color: ${Colors.SECONDARY};
  }
`;

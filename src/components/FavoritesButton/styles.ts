import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

export const StyledFavoritesButton = styled.button`
  ${typography.button}

  background-color: ${Colors.PRIMARY};
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

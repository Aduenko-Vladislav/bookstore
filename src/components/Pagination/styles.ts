import styled from "styled-components";
import { Colors } from "../../ui/colors";

export const StyledPagination = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  max-width: 100%;
  width: 80px;

  font-size: 16px;
  line-height: 32px;
  color: ${Colors.PRIMARY_LIGHT};
  border-bottom: 1px solid ${Colors.RED};
  &:hover {
    border-bottom: 1px solid ${Colors.PRIMARY};
  }
  &:active {
    box-shadow: 4px 4px 30px ${Colors.RED};
  }
`;

export const Pages = styled.div`
  display: flex;
`;

export const Page = styled.button`
  width: 30px;
  height: 30px;
  padding: 3px;
  margin: 0 5px;

  border-bottom: 1px solid ${Colors.RED};
  cursor: pointer;
`;

export const CurrentPage = styled(Page)`
  border: 1px solid #111612;
  background-color: ${Colors.ORANGE};
`;

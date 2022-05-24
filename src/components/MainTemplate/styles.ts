import styled from "styled-components";
import { media } from "../../ui/media";

export const StyledApp = styled.div`
  max-width: 1920px;
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1120px;
  padding: 0 16px;
  width: 100%;
  margin: 0 auto;

  ${media.tablet} {
    max-width: 688px;
  }
`;

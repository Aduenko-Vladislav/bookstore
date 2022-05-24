import styled from "styled-components";
import { media } from "../../ui/media";

export const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;

  ${media.tablet} {
    max-width: 688px;
  }
`;
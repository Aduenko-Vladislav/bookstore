import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

const StyledFooter = styled.footer`
  max-width: 1920px;
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1120px;
  width: 100%;
  margin: 0 auto;

  border-top: 1px solid ${Colors.GRAY};
  ${media.mobile} {
    display: block;
  }
`;

const Copyright = styled.p`
  ${typography.B2};
  font-weight: 400;
  padding: 35px 0;
  ${media.mobile} {
    text-align: center;
    padding: 40px 0 24px;
  }
`;

export { StyledFooter, Container, Copyright };

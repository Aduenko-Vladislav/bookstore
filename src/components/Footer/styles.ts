import styled from "styled-components";
import { typography } from "../../ui/typography";

const FooterContainer = styled.footer`
  max-width: 1920px;
  width: 100%;
  padding: 0 16px;
  margin: 0 auto 72px;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1120px;
  width: 100%;
  margin: 0 auto;

  border-top: 1px solid #e7e7e7;
`;

const FooterDate = styled.p`
  ${typography.B2};
  font-weight: 400;
  padding: 35px 0;
`;
const FooterRights = styled.p`
  ${typography.B2};
  font-weight: 400;
`;

export { FooterContainer, FooterWrapper, FooterDate, FooterRights };

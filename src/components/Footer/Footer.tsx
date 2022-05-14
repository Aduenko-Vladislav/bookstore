import {
  FooterContainer,
  FooterDate,
  FooterRights,
  FooterWrapper,
} from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterDate>©2022 Bookstore</FooterDate>
        <FooterRights>All rights reserved</FooterRights>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;

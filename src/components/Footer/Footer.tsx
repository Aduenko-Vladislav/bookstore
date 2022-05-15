import { StyledFooter, Copyright, Container } from "./styles";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Copyright>©2022 Bookstore</Copyright>
        <Copyright>All rights reserved</Copyright>
      </Container>
    </StyledFooter>
  );
};

export default Footer;

import styled from "styled-components";

const StyledHeader = styled.header`
  max-width: 1920px;
  width: 100%;
  padding: 0 16px;
  margin: 0 auto 72px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 24px 0;

  border-bottom: 1px solid #e7e7e7;
`;

const Logo = styled.img`
  display: block;
  cursor: pointer;
`;

export { Logo, Container, StyledHeader };

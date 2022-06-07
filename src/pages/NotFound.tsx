import styled from "styled-components";
import { Title } from "../components/Title/Title";

export const NotFound = () => {
  return (
    <Container>
      <Title>Oooops 🙈</Title>
      <Title>Page was NOT Found</Title>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

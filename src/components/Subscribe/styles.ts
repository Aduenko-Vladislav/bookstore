import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

const SubscribeContainer = styled.section`
  max-width: 1920px;
  width: 100%;
  padding: 0 16px;
  margin: 0 auto 72px;
`;

const SubscribeWrapper = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
`;

const StyledSubscribe = styled.div`
  padding: 56px 64px;

  background: ${Colors.purple};
`;

const SubscribeTitle = styled.h2`
  ${typography.H2};
  color: ${Colors.primary};
`;

const SubscribeSubtitle = styled.p`
  ${typography.S1};
  color: ${Colors.secondary};
  margin-bottom: 32px;
`;

const SubscribeForm = styled.div`
  display: flex;
`;

const SubscribeInput = styled.input`
  ${typography.input};
  max-width: 845px;
  width: 100%;
`;

const SubscribeButton = styled.button`
  ${typography.button};
  padding: 16px 40px;
`;

export {
  SubscribeButton,
  SubscribeInput,
  SubscribeForm,
  SubscribeSubtitle,
  SubscribeTitle,
  StyledSubscribe,
  SubscribeWrapper,
  SubscribeContainer,
};

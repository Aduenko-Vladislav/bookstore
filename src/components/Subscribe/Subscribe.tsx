import {
  StyledSubscribe,
  SubscribeTitle,
  SubscribeSubtitle,
  SubscribeInput,
  SubscribeButton,
  SubscribeForm,
  SubscribeWrapper,
  SubscribeContainer,
} from "./styles";

const Subscribe = () => {
  return (
    <SubscribeContainer>
      <SubscribeWrapper>
        <StyledSubscribe>
          <SubscribeTitle>Subscribe to Newsletter</SubscribeTitle>
          <SubscribeSubtitle>
            Be the first to know about new IT books, upcoming releases,
            exclusive offers and more.
          </SubscribeSubtitle>
          <SubscribeForm>
            <SubscribeInput placeholder="Your email" />
            <SubscribeButton>Subscribe</SubscribeButton>
          </SubscribeForm>
        </StyledSubscribe>
      </SubscribeWrapper>
    </SubscribeContainer>
  );
};

export default Subscribe;

import styled from "styled-components";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

export const SlideContainer = styled.div`
  margin-bottom: 150px;
  ${media.tablet} {
    margin-bottom: 80px;
  }
  ${media.mobile} {
    margin-bottom: 80px;
  }
`;

export const CustomSlide = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  max-width: 352px;
  width: 100%;
  margin: 10px auto 0;

  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-radius: 20px;
  cursor: pointer;
`;

export const SliderTitle = styled.h3`
  margin-bottom: 20px;
  padding: 0 20px;

  ${typography.H3}
  text-overflow: ellipsis;
  overflow: hidden;
  height: 60px;
  ${media.tablet} {
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
  }
`;

export const SliderPrice = styled.h3`
  ${typography.H3}
  padding: 0 20px 10px;
  ${media.tablet} {
    display: none;
  }
  ${media.mobile} {
    display: none;
  }
`;

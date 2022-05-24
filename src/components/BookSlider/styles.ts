import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

export const SlideContainer = styled.div`
  margin-bottom: 150px;
`;

export const CustomSlide = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  max-width: 352px;
  width: 100%;

  margin: 0 auto;
  padding: 0 20px;

  box-shadow: 3px 3px ${Colors.BLUE}, -0.4em 0 0.4em ${Colors.BLUE};
  border-radius: 20px;
  cursor: pointer;
`;

export const SliderTitle = styled.h3`
  margin-bottom: 20px;

  ${typography.H3}
  text-overflow: ellipsis;
  overflow: hidden;
  height: 60px;
`;

export const SliderPrice = styled.h3`
  ${typography.H3}
`;

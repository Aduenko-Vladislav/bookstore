import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

const StyledCartList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  position: relative;
  margin: 0 auto;

  margin-bottom: 20px;
  border-bottom: 1px solid ${Colors.GRAY};
`;

const StyledLink = styled(Link)`
  display: flex;
  margin-bottom: 20px;
  ${media.mobile} {
    display: block;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  width: 450px;

  margin-right: 90px;
  ${media.tablet} {
    margin-right: 0px;
  }
  ${media.mobile} {
    width: 100%;
    margin-bottom: 30px;
  }
`;

const CartImg = styled.img`
  background: ${Colors.BLUE};
  max-width: 226px;
  width: 100%;
  margin: 0 63px 20px;
  ${media.mobile} {
    margin: 0;
    max-width: none;
  }
`;

const CartTitle = styled.p`
  ${typography.H3};
  margin: 65px 0 25px;
  padding: 0 10px;
  ${media.mobile} {
    margin: 15px 0;
  }
`;

const CartSubtitle = styled.p`
  ${typography.B2};
  margin-bottom: 15px;
  padding: 0 10px;
`;

const CartPrice = styled.p`
  ${typography.H3};
  display: flex;
  justify-content: center;
  align-items: center;

  width: 155px;
  ${media.mobile} {
    width: 100%;
  }
`;

const RemoveContainer = styled.button`
  position: absolute;
  right: 0;
  top: 0;
`;

export {
  StyledCartList,
  CartPrice,
  CartTitle,
  CartImg,
  StyledLink,
  DescriptionContainer,
  CartSubtitle,
  Container,
  RemoveContainer,
};

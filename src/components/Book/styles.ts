import styled from "styled-components";
import { Down } from "../../assets/icons";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";
import { Link } from "react-scroll";
import { media } from "../../ui/media";

const StyledBook = styled.div`
  display: flex;
  margin-bottom: 72px;
`;

const BookImageContainer = styled.div`
  max-width: 544px;
  width: 100%;
  padding: 61px 0px;
  margin-right: 128px;

  background-color: ${Colors.ORANGE};
`;

const BookImage = styled.img`
  display: block;
  margin: 0 auto;
`;

const BookInfoContainer = styled.div`
  max-width: 448px;
  width: 100%;

  border-top: 1px solid ${Colors.GRAY};
`;
const RateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-gap: 18px;

  margin: 41px 0 24px;
`;

const BookPrice = styled.h2`
  ${typography.H2}
`;

const BookRating = styled.div``;

const InfoList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 90px;
  row-gap: 15px;

  margin-bottom: 30px;
`;
const Parameters = styled.p`
  ${typography.B2}
  font-weight: 400;
`;
const Attribute = styled.p`
  ${typography.B1}
  line-height: 20px;
`;

const AddButton = styled.button`
  ${typography.button}
  width: 100%;
  margin: 0 auto 20px;
`;

const ButtonDetails = styled.button`
  margin-bottom: 20px;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  cursor: pointer;
`;

const PreviewButton = styled.a`
  display: block;
  text-align: center;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: ${Colors.PRIMARY};
  cursor: pointer;
`;

const ArrowDown = styled(Down)`
  margin-left: 5px;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;

  text-decoration: none;
  color: ${Colors.PRIMARY};
`;

const TabContainer = styled.div`
  display: grid;
  column-gap: 20px;
  grid-template-columns: repeat(3, 160px);

  width: 100%;
  margin-bottom: 48px;

  border-bottom: 1px solid ${Colors.GRAY};
`;

const Tab = styled.button`
  ${typography.tab}
  padding: 0 40px 24px;
`;

const Description = styled.div`
  margin-bottom: 50px;
`;

const DetailsList = styled.div`
  display: grid;
  grid-template-columns: 150px 150px;
  column-gap: 90px;
  row-gap: 15px;

  margin-bottom: 30px;
`;

const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  ${media.tablet} {
    max-width: 688px;
  }
`;

export {
  StyledBook,
  BookImageContainer,
  BookInfoContainer,
  BookImage,
  RateContainer,
  BookPrice,
  BookRating,
  InfoList,
  Parameters,
  Attribute,
  AddButton,
  ButtonDetails,
  ArrowDown,
  StyledLink,
  TabContainer,
  Tab,
  Description,
  DetailsList,
  Container,
  PreviewButton,
};

import styled from "styled-components";
import { typography } from "../../ui/typography";
import search from "../../assets/svg/search.svg";
import { media } from "../../ui/media";

const StyledHeaderForm = styled.form`
  position: relative;

  max-width: 542px;
  width: 100%;

  border: 1px solid #e7e7e7;
  ${media.tablet} {
    display: none;
  }
`;

const SearchInput = styled.input`
  ${typography.input}
  max-width: 542px;
`;

const SearchFindButton = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;

  max-width: 24px;
  width: 24px;
  height: 24px;

  background-image: url(search);
`;

export { SearchFindButton, SearchInput, StyledHeaderForm };

import styled from "styled-components";
import { typography } from "../../ui/typography";
import { media } from "../../ui/media";
import { Colors } from "../../ui/colors";

const StyledForm = styled.form`
  position: relative;

  max-width: 542px;
  width: 100%;

  border: 1px solid ${Colors.GRAY};
  ${media.tablet} {
    max-width: 342px;
  }
  ${media.mobile} {
    max-width: 100px;
  }
`;

const SearchInput = styled.input`
  ${typography.input}
  max-width: 480px;
  width: 100%;
  ${media.mobile} {
    padding: 0;
  }
`;

const SearchFindButton = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;

  width: 24px;
  height: 24px;
  ${media.mobile} {
    display: none;
  }
`;

export { SearchFindButton, SearchInput, StyledForm };

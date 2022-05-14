import { SearchInput, SearchFindButton, StyledHeaderForm } from "./styles";

const HeaderForm = () => {
  return (
    <StyledHeaderForm>
      <SearchInput placeholder="Search" />
      <SearchFindButton />
    </StyledHeaderForm>
  );
};

export default HeaderForm;

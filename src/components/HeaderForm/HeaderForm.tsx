import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Search } from "../../assets/svg";

import { SearchInput, SearchFindButton, StyledHeaderForm } from "./styles";

const HeaderForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    navigate(`bookstore/search/${data.title}/1`); /// в url 2 раза bookstore!!
  };

  return (
    <StyledHeaderForm onSubmit={handleSubmit(onSubmit)}>
      <SearchInput placeholder="Search" type="text" {...register("title")} />
      <SearchFindButton type="submit">
        <Search />
      </SearchFindButton>
    </StyledHeaderForm>
  );
};

export default HeaderForm;

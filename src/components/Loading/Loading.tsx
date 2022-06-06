import {
  LeoBorderOne,
  LeoBorderTwo,
  LeoCoreOne,
  LeoCoreTwo,
  SpinnerBox,
} from "./styles";

export const Loading = () => {
  return (
    <SpinnerBox>
      <LeoBorderOne>
        <LeoCoreOne />
      </LeoBorderOne>
      <LeoBorderTwo>
        <LeoCoreTwo />
      </LeoBorderTwo>
    </SpinnerBox>
  );
};

import { StyledBackButton } from "./styles";

interface IBackButton {
  onClick: () => void;
}

export const BackButton = ({ onClick }: IBackButton) => {
  return <StyledBackButton onClick={onClick} />;
};

export default BackButton;

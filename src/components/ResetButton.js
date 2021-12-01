import { StyledResetButton } from "../styled/StyledResetButton.styled";

const ResetButton = (props) => {
  const resetFieldsHandler = () => {
    props.onReset();
  };

  return (
    <StyledResetButton
      className={props.isResetEnabled ? "" : "disabled"}
      onClick={resetFieldsHandler}
    >
      Reset
    </StyledResetButton>
  );
};

export default ResetButton;

import { StyledResetButton } from "../styled/StyledResetButton.styled";

const ResetButton = (props) => {
  const resetFieldsHandler = () => {
    props.isEnabled = false;
  };

  return (
    <StyledResetButton
      className={props.isEnabled ? "" : "disabled"}
      onClick={resetFieldsHandler}
    >
      Reset
    </StyledResetButton>
  );
};

export default ResetButton;

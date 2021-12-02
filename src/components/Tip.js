import { StyledTip } from "../styled/StyledInputColumn.styled";

const Tip = (props) => {
  // Pass clicked tip amount back to InputColumn
  const tipClickHandler = () => {
    props.onTipClick(props.tip);
  };

  return (
    <StyledTip
      className={props.selected ? "active" : ""}
      onClick={tipClickHandler}
    >{`${props.tip}%`}</StyledTip>
  );
};

export default Tip;

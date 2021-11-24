import { StyledContainer } from "../styled/StyledContainer.styled";

const Container = (props) => {
  return (
    <StyledContainer>
      {props.children}
    </StyledContainer>
  );
};

export default Container;

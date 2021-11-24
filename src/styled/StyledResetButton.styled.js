import styled from "styled-components";

export const StyledResetButton = styled.button`
  background-color: hsl(172, 67%, 45%);
  font-family: inherit;
  text-transform: uppercase;
  color: hsl(183, 100%, 15%);
  font-weight: 700;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 0;
  transition: all 0.1s ease-in-out;

  &.disabled {
    opacity: 0.3;
    pointer-events: none;

    &:hover {
      opacity: 0.3;
      pointer-events: none;
    }
  }

  &:hover {
    background-color: #9fe8df;
    cursor: pointer;
  }
`;

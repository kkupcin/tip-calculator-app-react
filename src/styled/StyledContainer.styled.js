import styled from "styled-components";

export const StyledContainer = styled.div`
  background: hsl(0, 0%, 100%);
  border-radius: 25px;
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  width: 50%;
  box-shadow: 1px 11px 21px -2px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  @media screen and (max-width: 1600px) {
    width: 60%;
  }

  @media screen and (max-width: 1440px) {
    width: 70%;
  }

  @media screen and (max-width: 1200px) {
    width: 80%;
    gap: 2rem;
  }

  @media screen and (max-width: 980px) {
    width: 90%;
  }

  @media screen and (max-width: 820px) {
    width: 80%;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 560px) {
    width: 90%;
  }

  @media screen and (max-width: 470px) {
    width: 100%;
    padding: 2rem;
  }
`;

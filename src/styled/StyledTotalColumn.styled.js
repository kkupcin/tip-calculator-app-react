import styled from "styled-components";

export const StyledTotalColumn = styled.div`
  background-color: hsl(183, 100%, 15%);
  color: hsl(0, 0%, 100%);
  border-radius: 25px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;

  & > div {
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      div {
        line-height: 1.5;

        h2 {
          font-weight: 700;
        }

        h3 {
          font-size: 0.8rem;
          color: hsl(184, 14%, 56%);
        }
      }

      .amount {
        font-size: 2rem;
        color: hsl(172, 67%, 45%);
        font-weight: 700;
      }
    }
  }

  @media screen and (max-width: 820px) {
    & > div {
      & > div:last-child {
        margin-bottom: 3rem;
      }
    }
  }

  @media screen and (max-width: 470px) {
    max-width: 100%;
  }
`;

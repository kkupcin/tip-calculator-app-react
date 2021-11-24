import styled from "styled-components";
import img1 from "../images/icon-dollar.svg";
import img2 from "../images/icon-person.svg";

export const StyledInputColumn = styled.div`
  color: hsl(186, 14%, 43%);
  font-size: 1rem;
  font-weight: 700;

  & > div {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    gap: 0.5rem;
    position: relative;

    input {
      border: 2px solid transparent;
      background-color: hsl(189, 41%, 97%);
      font-family: inherit;
      font-size: 24px;
      outline: none;
      border-radius: 5px;
      padding: 0.5rem 0.6rem;
      text-align: right;
      color: hsl(183, 100%, 15%);
      font-weight: 700;
      transition: all 0.1s ease-in-out;

      &:focus,
      &:hover {
        border: 2px solid hsl(172, 67%, 45%);
      }

      &::placeholder {
        color: hsl(184, 14%, 56%);
        text-align: right;
        font-weight: 700;
      }

      @media screen and (max-width: 470px) {
        width: 100%;
        box-sizing: border-box;
      }
    }

    &:last-child {
      margin-bottom: 0;

      @media screen and (max-width: 820px) {
        margin-bottom: 3rem;
      }
    }

    &:first-child::after,
    &:last-child::after {
      content: "";
      height: 20px;
      width: 20px;
      position: absolute;
      z-index: 20;
      background-size: contain;
      background-repeat: no-repeat;
      top: 50%;
      left: 20px;
    }

    &.dollar-icon::after {
      background-image: url("${img1}");
    }

    &.people-icon::after {
      background-image: url("${img2}");
    }
  }

  .error-label {
    & input {
      border: 2px solid #b57b6d;

      &:hover,
      &:focus {
        border: 2px solid #b57b6d;
      }
    }
  }

  .error-label::before {
    content: "Can't be zero";
    position: absolute;
    right: 0;
    font-size: 16px;
    color: #b57b6d;
  }

  @media screen and (max-width: 470px) {
    max-width: 100%;
  }
`;

export const StyledTipWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  color: hsl(0, 0%, 100%);

  .custom-tip {
    padding: 0.4rem 0.5rem;
    box-sizing: border-box;
    width: 100%;
    max-height: 100%;
  }

  @media screen and (max-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StyledTip = styled.div`
  background-color: hsl(183, 100%, 15%);
  font-size: 24px;
  padding: 0.8rem 0;
  text-align: center;
  border-radius: 5px;
  font-weight: 700;
  align-self: center;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: #9fe8df;
    color: hsl(183, 100%, 15%);
    cursor: pointer;
  }

  &.active {
    background-color: hsl(172, 67%, 45%);
    color: hsl(183, 100%, 15%);
  }
`;

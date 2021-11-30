import { useEffect, useState } from "react";
import {
  StyledInputColumn,
  StyledTip,
  StyledTipWrapper,
} from "../styled/StyledInputColumn.styled";

const InputColumn = (props) => {
  const [customTip, setCustomTip] = useState("");

  // Bill amount input listener
  const billInputListener = (e) => {
    let billInputAmount = parseFloat(e.target.value);
    let billInputAmountString = e.target.value;
    if (billInputAmount === "" || billInputAmount < 0) {
      billInputAmount = "";
    }

    // Restore reset button functionality
    // if (billInputAmount !== "") {
    //   resetBtn.classList.remove("disabled");
    // }

    // Add number limits on inputs
    if (billInputAmount > 9999.99 || billInputAmountString.includes("-")) {
      billInputAmount = props.amounts.bill;
    }

    if (billInputAmountString.includes(".")) {
      let index = billInputAmountString.indexOf(".");
      let calcDecimals = billInputAmountString.length - index;
      if (calcDecimals > 3) {
        billInputAmount = props.amounts.bill;
      }
    }

    // Prevent number from starting with 0
    if (
      billInputAmountString.length > 1 &&
      billInputAmountString.startsWith("0")
    ) {
      billInputAmount = billInputAmountString.replace("0", "");
    }

    const currentAmountsCopy = { ...props.amounts };

    currentAmountsCopy.bill = billInputAmount;

    props.onAmountChange(currentAmountsCopy);
  };

  // Custom tip amount listener
  const customTipInputListener = (e) => {
    let tipInputAmount = parseInt(e.target.value);
    let tipInputAmountString = e.target.value;
    if (e.target.focus) {
      setCustomTip(0);
    }

    if (tipInputAmount < 0 || tipInputAmount === "") {
      tipInputAmount = 0;
    }

    // Restore reset button functionality
    // if (tipInputAmount !== "") {
    //   resetBtn.classList.remove("disabled");
    // }

    // Add number limits on inputs
    if (
      tipInputAmount > 100 ||
      tipInputAmountString.includes("-") ||
      tipInputAmountString.length > 3
    ) {
      tipInputAmount = props.amounts.tip;
    }

    // Adjust current tip value
    if (tipInputAmountString.trim() !== "") {
      setCustomTip(tipInputAmount);
    }

    // Prevent number from starting with 0
    if (
      tipInputAmountString.length > 1 &&
      tipInputAmountString.startsWith("0")
    ) {
      tipInputAmount = tipInputAmountString.replace("0", "");
    }

    setCustomTip(tipInputAmount);

    const currentAmountsCopy = { ...props.amounts };

    currentAmountsCopy.tip = customTip;

    props.onAmountChange(currentAmountsCopy);
  };

  // Number of people input listener
  const noOfPeopleInputListener = (e) => {
    let noOfPeopleInputAmount = parseInt(e.target.value);
    let noOfPeopleInputAmountString = e.target.value;

    // Restore reset button functionality
    // if (noOfPeopleInputAmount !== "") {
    //   resetBtn.classList.remove("disabled");
    // }

    // Add number limits on inputs
    if (
      noOfPeopleInputAmount > 99 ||
      noOfPeopleInputAmountString.includes("-") ||
      noOfPeopleInputAmountString.length > 2
    ) {
      noOfPeopleInputAmount = props.amounts.noOfPeople;
    }

    // Prevent number from starting with 0
    if (
      noOfPeopleInputAmountString.length > 1 &&
      noOfPeopleInputAmountString.startsWith("0")
    ) {
      noOfPeopleInputAmount = noOfPeopleInputAmountString.replace("0", "");
    }

    const currentAmountsCopy = { ...props.amounts };

    currentAmountsCopy.noOfPeople = noOfPeopleInputAmount;

    props.onAmountChange(currentAmountsCopy);
  };

  const tipSelectionHandler = (e) => {};

  return (
    <StyledInputColumn>
      <div className="dollar-icon">
        <label>Bill</label>
        <input
          type="number"
          placeholder="0"
          min="0"
          max="9999"
          onChange={billInputListener}
          value={props.amounts.bill}
        />
      </div>
      <div>
        <label>Select Tip %</label>
        <StyledTipWrapper onClick={tipSelectionHandler}>
          <StyledTip data-tip="5">5%</StyledTip>
          <StyledTip data-tip="10">10%</StyledTip>
          <StyledTip data-tip="15">15%</StyledTip>
          <StyledTip data-tip="25">25%</StyledTip>
          <StyledTip data-tip="50">50%</StyledTip>
          <input
            className="custom-tip"
            placeholder="Custom"
            min="0"
            max="100"
            type="number"
            onChange={customTipInputListener}
            value={customTip}
          />
        </StyledTipWrapper>
      </div>
      <div
        className={`people-icon ${
          props.amounts.noOfPeople === 0 || props.amounts.noOfPeople === ""
            ? "error-label"
            : ""
        }`}
      >
        <label>Number of People</label>
        <input
          type="number"
          placeholder="0"
          max="100"
          onChange={noOfPeopleInputListener}
          value={props.amounts.noOfPeople}
        />
      </div>
    </StyledInputColumn>
  );
};

export default InputColumn;

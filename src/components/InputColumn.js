import { useState } from "react";
import {
  StyledInputColumn,
  StyledTipWrapper,
} from "../styled/StyledInputColumn.styled";
import Tip from "./Tip";

const InputColumn = (props) => {
  const [errorShown, setErrorShown] = useState(false);

  // Bill amount input listener
  const billInputListener = (e) => {
    let billInputAmount = parseFloat(e.target.value);
    let billInputAmountString = e.target.value;

    // Reset bill amount to 0 if input is empty or less than 0
    if (billInputAmount === "" || billInputAmount < 0) {
      billInputAmount = 0;
    }

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

    // Check if bill input value is NaN - if yes, reset it to an empty string
    if (isNaN(billInputAmount)) {
      billInputAmount = "";
    }

    // Pass bill input value to App
    props.onAmountChange({ ...props.amounts, bill: billInputAmount });
  };

  // Custom tip amount listener
  const customTipInputListener = (e) => {
    let tipInputAmount = parseInt(e.target.value);
    let tipInputAmountString = e.target.value;

    // Check if custom tip is in focus
    if (e.target.focus) {
      props.onCustomTipChange(0);
    }

    // Check if custom tip is smaller than 0 or empty
    if (tipInputAmount < 0 || tipInputAmount === "") {
      tipInputAmount = 0;
    }

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
      props.onCustomTipChange(tipInputAmount);
    }

    // Prevent number from starting with 0
    if (
      tipInputAmountString.length > 1 &&
      tipInputAmountString.startsWith("0")
    ) {
      tipInputAmount = tipInputAmountString.replace("0", "");
    }

    // Pass custom tip back to App
    props.onCustomTipChange(tipInputAmount);

    // Check if custom tip is NaN - if yes, reset it to an empty string
    if (isNaN(tipInputAmount)) {
      tipInputAmount = "";
    }

    // Pass tip amount to App
    props.onAmountChange({ ...props.amounts, tip: tipInputAmount });
  };

  // Number of people input listener
  const noOfPeopleInputListener = (e) => {
    let noOfPeopleInputAmount = parseInt(e.target.value);
    let noOfPeopleInputAmountString = e.target.value;

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

    // Check if number of people input value is NaN - if yes, reset to empty string
    if (isNaN(noOfPeopleInputAmount)) {
      noOfPeopleInputAmount = "";
    }

    // Check if error message needs to be added or removed on change
    noOfPeopleInputErrorHandler(e);

    // Pass number of people back to App
    props.onAmountChange({
      ...props.amounts,
      noOfPeople: noOfPeopleInputAmount,
    });
  };

  // Number of people error handler - add class if no of people is 0 or empty after focus
  const noOfPeopleInputErrorHandler = (e) => {
    if (e.target.value === "" || parseFloat(e.target.value) === 0) {
      setErrorShown(true);
    } else if (e.target.value !== "" || parseFloat(e.target.value) !== 0) {
      setErrorShown(false);
    }
  };

  // Check which tip was clicked, pass amount back to app and update custom tip to empty string
  const tipClickHandler = (tip) => {
    props.onAmountChange({ ...props.amounts, tip: tip });
    props.onCustomTipChange("");
  };

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
        <StyledTipWrapper>
          <Tip
            onTipClick={tipClickHandler}
            selected={props.amounts.tip === "5"}
            tip="5"
          />
          <Tip
            onTipClick={tipClickHandler}
            selected={props.amounts.tip === "10"}
            tip="10"
          />
          <Tip
            onTipClick={tipClickHandler}
            selected={props.amounts.tip === "15"}
            tip="15"
          />
          <Tip
            onTipClick={tipClickHandler}
            selected={props.amounts.tip === "25"}
            tip="25"
          />
          <Tip
            onTipClick={tipClickHandler}
            selected={props.amounts.tip === "50"}
            tip="50"
          />
          <input
            className="custom-tip"
            placeholder="Custom"
            min="0"
            max="100"
            type="number"
            onChange={customTipInputListener}
            value={props.customTip}
          />
        </StyledTipWrapper>
      </div>
      <div className={`people-icon ${errorShown ? "error-label" : ""}`}>
        <label>Number of People</label>
        <input
          onFocus={noOfPeopleInputErrorHandler}
          onBlur={noOfPeopleInputErrorHandler}
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

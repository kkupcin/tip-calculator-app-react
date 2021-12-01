import {
  StyledInputColumn,
  StyledTip,
  StyledTipWrapper,
} from "../styled/StyledInputColumn.styled";

const InputColumn = (props) => {
  // Bill amount input listener
  const billInputListener = (e) => {
    let billInputAmount = parseFloat(e.target.value);
    let billInputAmountString = e.target.value;
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

    if (isNaN(billInputAmount)) {
      billInputAmount = "";
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
      props.onCustomTipChange(0);
    }

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

    props.onCustomTipChange(tipInputAmount);

    if (isNaN(tipInputAmount)) {
      tipInputAmount = "";
    }

    const currentAmountsCopy = { ...props.amounts };

    currentAmountsCopy.tip = tipInputAmount;

    props.onAmountChange(currentAmountsCopy);
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

    if (isNaN(noOfPeopleInputAmount)) {
      noOfPeopleInputAmount = "";
    }

    const currentAmountsCopy = { ...props.amounts };

    currentAmountsCopy.noOfPeople = noOfPeopleInputAmount;

    props.onAmountChange(currentAmountsCopy);
  };

  const tipSelectionHandler = (e) => {
    const currentAmountsCopy = { ...props.amounts };
    e.target.parentNode.childNodes.forEach((tip) => {
      if (tip === e.target) {
        e.target.classList.add("active");
        currentAmountsCopy.tip = e.target.dataset.tip;
      } else {
        tip.classList.remove("active");
      }
      if (tip.tagName === "INPUT" && tip !== e.target) {
        props.onCustomTipChange(0);
      }
    });
    if (e.target.focus && e.target.tagName === "INPUT") {
      currentAmountsCopy.tip = e.target.value;
    }

    props.onAmountChange(currentAmountsCopy);
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
            value={props.customTip}
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

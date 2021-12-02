import { StyledTotalColumn } from "../styled/StyledTotalColumn.styled";
import ResetButton from "./ResetButton";

const TotalColumn = (props) => {
  // Calculate total tip amount divided by number of people
  const calculateTip = () => {
    const billValue = parseFloat(props.currAmounts.bill) || 0;
    const tipValue = props.currAmounts.tip ? props.currAmounts.tip / 100 : 0;
    const noOfPeopleValue = parseInt(props.currAmounts.noOfPeople) || 1;

    return (billValue * tipValue) / noOfPeopleValue;
  };

  // Calculate total bill amount + tip divided by number of people
  const calculateTotal = () => {
    const billValue = parseFloat(props.currAmounts.bill) || 0;
    const tipValue = props.currAmounts.tip ? props.currAmounts.tip / 100 : 0;
    const noOfPeopleValue = parseInt(props.currAmounts.noOfPeople) || 1;

    return (billValue + billValue * tipValue) / noOfPeopleValue;
  };

  return (
    <StyledTotalColumn>
      <div>
        <div>
          <div>
            <h2>Tip Amount</h2>
            <h3>/ person</h3>
          </div>
          <div className="amount tip-amount">{`$${parseFloat(
            calculateTip() || 0
          ).toFixed(2)}`}</div>
        </div>
        <div>
          <div>
            <h2>Total</h2>
            <h3>/ person</h3>
          </div>
          <div className="amount total-amount">{`$${parseFloat(
            calculateTotal() || 0
          ).toFixed(2)}`}</div>
        </div>
      </div>
      <ResetButton
        onReset={props.onReset}
        isResetEnabled={props.isResetEnabled}
      ></ResetButton>
    </StyledTotalColumn>
  );
};

export default TotalColumn;

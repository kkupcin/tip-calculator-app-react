import { useState } from "react";
import { StyledTotalColumn } from "../styled/StyledTotalColumn.styled";
import ResetButton from "./ResetButton";

const TotalColumn = (props) => {
  const [currAmounts, setCurrentAmounts] = useState({
    bill: props.currAmounts.bill || 0,
    tip: props.currAmounts.tip || 0,
    noOfPeople: props.currAmounts.noOfPeople || 1,
  });

  // CALCULATE TOTALS

  return (
    <StyledTotalColumn>
      <div>
        <div>
          <div>
            <h2>Tip Amount</h2>
            <h3>/ person</h3>
          </div>
          <div className="amount tip-amount">{`$${parseFloat(currAmounts.bill).toFixed(2)}`}</div>
        </div>
        <div>
          <div>
            <h2>Total</h2>
            <h3>/ person</h3>
          </div>
          <div className="amount total-amount">{`$${parseFloat(currAmounts.tip).toFixed(2)}`}</div>
        </div>
      </div>
      <ResetButton isEnabled></ResetButton>
    </StyledTotalColumn>
  );
};

export default TotalColumn;

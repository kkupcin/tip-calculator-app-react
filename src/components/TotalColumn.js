import { StyledTotalColumn } from "../styled/StyledTotalColumn.styled";
import ResetButton from "./ResetButton";

const TotalColumn = () => {
  return (
    <StyledTotalColumn>
      <div>
        <div>
          <div>
            <h2>Tip Amount</h2>
            <h3>/ person</h3>
          </div>
          <div className="amount tip-amount"></div>
        </div>
        <div>
          <div>
            <h2>Total</h2>
            <h3>/ person</h3>
          </div>
          <div className="amount total-amount"></div>
        </div>
      </div>
      <ResetButton></ResetButton>
    </StyledTotalColumn>
  );
};

export default TotalColumn;

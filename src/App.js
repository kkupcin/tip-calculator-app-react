import "./App.css";
import Container from "./components/Container";
import { Logo } from "./styled/Logo.styled";
import logo from "./images/logo.svg";
import InputColumn from "./components/InputColumn";
import TotalColumn from "./components/TotalColumn";
import { useState } from "react";

function App() {
  const [currentAmounts, setCurrentAmounts] = useState({
    tip: "",
    bill: "",
    noOfPeople: "",
  });
  const [customTip, setCustomTip] = useState("");

  // Receive input values from InputColumn and set as state
  const changeCurrAmounts = (amounts) => {
    setCurrentAmounts(amounts);
  };

  // Reset the state to empty values if Reset button has been clicked
  const resetHandler = () => {
    setCurrentAmounts({
      tip: "",
      bill: "",
      noOfPeople: "",
    });
    setCustomTip("");
  };

  // Receive custom tip value from InputColumn and set state
  const customTipHandler = (newCustomTip) => {
    setCustomTip(newCustomTip);
  };

  // Check if Reset button needs to be enabled
  const isResetEnabled =
    currentAmounts.tip !== "" ||
    currentAmounts.bill !== "" ||
    currentAmounts.noOfPeople !== ""
      ? true
      : false;

  return (
    <div className="App">
      <Logo src={logo} alt="Logo" />
      <Container>
        <InputColumn
          amounts={currentAmounts}
          onAmountChange={changeCurrAmounts}
          customTip={customTip}
          onCustomTipChange={customTipHandler}
        />
        <TotalColumn
          currAmounts={currentAmounts}
          isResetEnabled={isResetEnabled}
          onReset={resetHandler}
        />
      </Container>
    </div>
  );
}

export default App;

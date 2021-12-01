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

  const changeCurrAmounts = (amounts) => {
    setCurrentAmounts(amounts);
  };

  const resetHandler = () => {
    setCurrentAmounts({
      tip: "",
      bill: "",
      noOfPeople: "",
    });
    setCustomTip("");
  };

  const customTipHandler = (newCustomTip) => {
    setCustomTip(newCustomTip);
  };

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

// Components:
// - main container
// - input column
//    - tip list + custom tip
// - total box column

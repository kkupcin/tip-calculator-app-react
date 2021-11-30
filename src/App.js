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

  const changeCurrAmounts = (amounts) => {
    setCurrentAmounts(amounts);
  };

  const btnIsEnabled = (isEnabled) => {
    // if (isEnabled) {
    //   return;
    // } else {
    //   setCurrentAmounts({
    //     tip: "",
    //     bill: "",
    //     noOfPeople: "",
    //   });
    // }
  };

  return (
    <div className="App">
      <Logo src={logo} alt="Logo" />
      <Container>
        <InputColumn amounts={currentAmounts} onAmountChange={changeCurrAmounts} />
        <TotalColumn currAmounts={currentAmounts} isEnabled={btnIsEnabled} />
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

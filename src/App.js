import "./App.css";
import Container from "./components/Container";
import { Logo } from "./styled/Logo.styled";
import logo from "./images/logo.svg";
import InputColumn from "./components/InputColumn";
import TotalColumn from "./components/TotalColumn";
import { useEffect, useState } from "react";

function App() {
  const [currentAmounts, setCurrentAmounts] = useState({
    tip: "",
    bill: "",
    noOfPeople: "",
  });

  const changeCurrAmounts = (amounts) => {
    setCurrentAmounts({
      tip: amounts.tip,
      bill: amounts.bill,
      noOfPeople: amounts.noOfPeople,
    });
  };

  const btnIsEnabled = () => {
    if (
      currentAmounts.tip !== "" &&
      currentAmounts.bill !== "" &&
      currentAmounts.noOfPeople !== ""
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="App">
      <Logo src={logo} alt="Logo" />
      <Container>
        <InputColumn amounts={changeCurrAmounts} />
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

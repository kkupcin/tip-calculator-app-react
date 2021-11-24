import "./App.css";
import Container from "./components/Container";
import { Logo } from "./styled/Logo.styled";
import logo from "./images/logo.svg";
import InputColumn from "./components/InputColumn";
import TotalColumn from "./components/TotalColumn";

function App() {
  return (
    <div className="App">
      <Logo src={logo} alt="Logo" />
      <Container>
        <InputColumn />
        <TotalColumn />
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

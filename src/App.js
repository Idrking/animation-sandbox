import Container from "./components/Container"
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [state, setState] = useState({buttonOne: false, buttonTwo: false})
  const buttonToggle = (button) => {
    setState(prev => {
      const newState = {};
      for (const key in prev) {
        newState[key] = key === button ? !prev[button] : false;
      }
      return {...newState}
    });
  }
  
  return (
    <>
    <Button onClick={() => buttonToggle("buttonOne")} active={state.buttonOne}>Button 1</Button>
    <Button onClick={() => buttonToggle("buttonTwo")} active={state.buttonTwo}>Button 2</Button>
    <Container />
    </>
  );
}

export default App;

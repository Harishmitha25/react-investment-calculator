import { Header } from "./components/Header";
import { UserInput } from "./components/UserInput";
import { Results } from "./components/Results";

import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6, // percent
    duration: 10, //years
  });

  function handleUserInput(input, value) {
    setUserInput((previousInput) => {
      return { ...previousInput, [input]: +value }; //user input from event.target.value is string type even input type is set to number so
    });
  }

  const isInputValid =
    userInput.duration > 0 &&
    userInput.annualInvestment > 0 &&
    userInput.initialInvestment > 0 &&
    userInput.expectedReturn > 0;
  return (
    <>
      <Header></Header>
      <UserInput
        onInputChange={handleUserInput}
        userInput={userInput}
      ></UserInput>
      {!isInputValid && (
        <p className="center">Please enter valid input data.</p>
      )}
      {isInputValid && <Results input={userInput}></Results>}
    </>
  );
}

export default App;

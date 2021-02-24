import React from "react";
import ReactDom from "react-dom";

function App() {
  const [inputValue, setInputValue] = React.useState("");
  // Use Array Destructuring
  // const inputValue = inputState[0];
  // const setInputValue = inputState[1]; // function to update the input value

  function handleInputChange(event) {
    setInputValue(event.target.value); // set input value function
  }

  return (
    <div id="app">
      <input onChange={handleInputChange} />
      <p>{inputValue}</p>
    </div>
  );
}

const rootNote = document.getElementById("root");
ReactDom.render(<App />, rootNote);

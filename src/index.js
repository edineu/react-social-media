import React from "react";
import ReactDom from "react-dom";

function App() {
  const [language, setLanguage] = React.useState("Python");
  const [yearsExperience, setYearsExperience] = React.useState(0);
  // Use Array Destructuring
  // const inputValue = inputState[0];
  // const setInputValue = inputState[1]; // function to update the input value

  return (
    <div>
      <button onClick={() => setLanguage("javascript")}>Change language</button>
      <br />
      <div>
        <input
          type="number"
          onChange={(event) => setYearsExperience(event.target.value)}
        />
      </div>
      <p>I am learning a language {language}</p>
      <p>I have {yearsExperience} years of experience</p>
    </div>
  );
}

const rootNote = document.getElementById("root");
ReactDom.render(<App />, rootNote);

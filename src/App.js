import "./App.css";
import { useState } from "react";

function App() {
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  let input;
  let palendrome = [];

  const handleInput = (e) => {
    input = e.target.value;
  };

  const reverseWord = (value) => {
    for (let i = value.length - 1; i > -1; i--) {
      const elem = value[i];
      console.log(elem);
      palendrome.push(elem);
    }
  };

  const concatWord = () => {
    palendrome = palendrome.join("");
  };

  const confirmMatch = () => {
    if (input === palendrome) {
      setSuccess(true);
      return
    }
    setFail(true);
  };

  const clearPalendrome = () => {
    palendrome = [];
  };

  const resetForm = () => {
      if (fail || success) {
          setSuccess(false);
          setFail(false);
      }
  };
  const checkIfPalendrome = (value) => {
    resetForm();
    reverseWord(value);
    concatWord();
    confirmMatch();
    clearPalendrome();
  };

  return (
    <div className="App">
      <div className="main">
        <div className="inputArea">
          <input onChange={(e) => handleInput(e)} type="text" />
          <button onClick={() => checkIfPalendrome(input)}>Submit</button>
        </div>
        {success && <div className="success">That's a palendrome!!</div>}
        {fail && <div className="fail">Sorry That's NOT a palendrome...</div>}
      </div>
    </div>
  );
}

export default App;

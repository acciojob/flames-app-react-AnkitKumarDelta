import React, { useState } from "react";
import '../styles/App.css';

const App = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [para, setPara] = useState("");

  function handleClear() {
    setInput1("");
    setInput2("");
    setPara("");
  }

  function handleRelation(s1, s2) {
    if (s1 === "" || s2 === "") {
      setPara("Please Enter valid input");
      return;
    }
    let m = new Map();
    let a = "";
    let b = "";

    if (s1.length > s2.length) {
      a = s2;
      b = s1;
    } else {
      a = s1;
      b = s2;
    }
    for (let ch of b) {
      m.set(ch, (m.get(ch) || 0) + 1);
    }

    let c = 0;
    for (let ch of a) {
      if (m.has(ch)) {
        m.set(ch, m.get(ch) - 1);
        if (m.get(ch) === 0) m.delete(ch);
      } else {
        c++;
      }
    }
    for (let [k, v] of m) {
      c += v;
    }
    const key = c % 6;
    const obj = {
      1: "Friends",
      2: "Love",
      3: "Affection",
      4: "Marriage",
      5: "Enemy",
      0: "Siblings",
    };

    setPara(obj[key]);
  }

  return (
    <div id="main">
      <input
        type="text"
        data-testid="input1"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />

      <input
        type="text"
        data-testid="input2"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />

      <button
        data-testid="calculate_relationship"
        onClick={() => handleRelation(input1, input2)}
      >
        Calculate Relationship Future
      </button>

      <button data-testid="clear" onClick={handleClear}>
        Clear
      </button>

      <h2>{para}</h2>
    </div>
  );
};

export default App;

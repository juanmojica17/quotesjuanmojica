import "./App.css";
import "./Quotes.css";
import React, { useState } from "react";
import Label from "./Label";
import { quotes as q } from "./Quotes.json";


function App() {

  const [quotes, setQuotes] = useState(q);
  const [pag,setPag] = useState(RandomNumber(1));
  const [color, setColor] = useState("#000000");
  const colorbook ={ 0: "#2F4F4F", 1: "#191970", 2: "#483D8B", 3: "#778899",4: "#000000" };


    function RandomNumber(max) {
        return Math.floor(Math.random() * max);
    }
  return (
      <div className="App" style={{ backgroundColor: color }}>

        <Label
            setQuotes={setQuotes}
            setPag={setPag}
            setColor={setColor}
            colorbook={colorbook}
            quotes={quotes}
            pag={pag}
            color={color}

        />


      </div>
  );
}

export default App;

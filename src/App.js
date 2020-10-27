import React, { useState } from "react";
import "./App.css";

//import components
import PadBank from "./components/PadBank";
import Controls from "./components/Controls";

//importing the banks
import { bankOne } from "./components/banks";
import { bankTwo } from "./components/banks";

function App() {
  const [currentPad, setCurrentPad] = useState(bankOne);
  const [power, setPower] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [display, setDisplay] = useState("Power Off");

  //power switch + display set
  const handlePadChange = () => {
    if (power) {
      if (currentPad === bankOne) {
        setCurrentPad(bankTwo);
        setDisplay("Smooth Piano Kit");
      } else {
        setCurrentPad(bankOne);
        setDisplay("Heater Kit");
      }
    }
  };

  const handlePowerChange = () => {
    //changes power state
    setPower(!power);
    //changes display text as per power
    setDisplay(display === "Power Off" ? "Power On" : "Power Off");

    //clears display in 1 second
    //in future we want to change this to green button
    setTimeout(() => clearDisplay(), 1000);
  };

  const handleVolumeChange = (e) => {
    if (power) {
      //set state to new value
      setVolume(e.target.value);
      // set display to new value
      setDisplay("Volume " + Math.round(e.target.value * 100));
    }
    //clear display after 1 second.
    setTimeout(() => clearDisplay(), 1000);
  };

  //clears display
  const clearDisplay = () => {
    setDisplay("");
  };

  //update display via pad name
  const updateDisplay = (name) => {
    if (power) {
      setDisplay(name);
    }
  };

  return (
    <div className="inner-container" id="drum-machine">
      <PadBank
        currentPad={currentPad}
        power={power}
        updateDisplay={updateDisplay}
      />
      <Controls
        adjustVolume={handleVolumeChange}
        volume={volume}
        padChange={handlePadChange}
        powerChange={handlePowerChange}
        power={power}
        display={display}
      />
    </div>
  );
}

export default App;
